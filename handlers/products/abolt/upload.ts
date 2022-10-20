import axios from 'axios'
import { Request, Response } from 'express'
import uploadFiles from '../../../controllers/file/upload'
import parser from '../../../controllers/products/abolt/xlsx/parser'
import postCallback from '../../../controllers/products/abolt/post'

const xlsx = (req: Request, res: Response<ResponseBaseProps<Array<string>>>) => {
	if (!req.body)
		return res.status(400).send({
			date: new Date(),
			message: 'XLSX not found'
		})

	const upload = uploadFiles('csv', './uploads/products/abolt')
	upload(req, res, (err: any) => {
		if (err) {
			return res.status(403).send({
				date: new Date(),
				message: 'Failed to upload XLSX file(s) please check your input.'
			})
		}
		const files = (req.files || [req.file]) as Array<Express.Multer.File>
		const messages: Array<string> = []
		files.map(({ path }) => {
			parser(
				{
					delimiter: ';',
					fromLine: 4,
					path: path
				},
				(product) => {
					postCallback(product, (err) => {
						if (err) messages.push(`Cannot parse product: ${JSON.stringify(product)}`)
					})
				}
			)
			return path
		})
		res.status(201).send({
			date: new Date(),
			message: messages.length ? messages.join('\n') : 'Successfully parsed.',
			packet: files.map((file) => file.path)
		})
	})
}

export { xlsx }
