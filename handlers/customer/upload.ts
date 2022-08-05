import { Request, Response } from 'express'
import uploadFiles from '../../controllers/file/upload'
import parser from '../../controllers/customer/csv/parser'
import postCallback from '../../controllers/customer/post'

const csv = (req: Request, res: Response<ResponseBaseProps<Array<string>>>) => {
	if (!req.body)
		return res.status(400).send({
			date: new Date(),
			message: 'CSV not found'
		})

	const upload = uploadFiles('csv', './uploads/customers/csv')
	upload(req, res, (err: any) => {
		if (err) {
			return res.status(403).send({
				date: new Date(),
				message: 'Failed to upload CSV file(s) please check your input.'
			})
		}
		const files = (req.files || [req.file]) as Array<Express.Multer.File>
		files.map(({ path }) => {
			return parser({ delimiter: ',', fromLine: 1, path }, async (data) => {
				postCallback(data, (err, packet) => {})
			})
		})
		res.status(201).send({
			date: new Date(),
			message: 'Successfully parsed.',
			packet: files.map((file) => file.path)
		})
	})
}

export { csv }
