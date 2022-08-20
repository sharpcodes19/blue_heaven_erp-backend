import { Request, Response } from 'express'
import uploadFiles from '../../controllers/file/upload'
import parser from '../../controllers/order/csv/parser'
import postCallback from '../../controllers/order/post'

const csv = (req: Request, res: Response<ResponseBaseProps<Array<string>>>) => {
	if (!req.body)
		return res.status(400).send({
			date: new Date(),
			message: 'CSV not found'
		})

	const upload = uploadFiles('csv', './uploads/csv/order')
	upload(req, res, (err: any) => {
		if (err) {
			return res.status(403).send({
				date: new Date(),
				message: 'Failed to upload CSV file(s) please check your input.'
			})
		}
		const files = (req.files || [req.file]) as Array<Express.Multer.File>

		let status: number = 201
		let message: string = 'Successfully parsed.'

		files.map(({ path }) => {
			return parser({ delimiter: ',', fromLine: 2, path }, (err, data) => {
				if (err || !data) {
					message = `There was an error saving your parsed CSV file: ${err!.message}`
					status = 400
					return console.error(status, message)
				}

				postCallback(data, (err, packet) => {
					if (err) {
						message = `There was an error saving your parsed CSV file: ${err.message}`
						status = 400
						return console.error(status, message)
					}
				})
			})
		})

		res.status(status).send({
			date: new Date(),
			message: message,
			packet: files.map((file) => file.path)
		})
	})
}

export { csv }
