import { Request, Response } from 'express'
import postCallback from '../../../controllers/inventory/finished_product/post'

const addOne = async (req: Request<{}, {}, FinishedProductProps>, res: Response<ResponseBaseProps>) => {
	if (!req.body || !req.body.name)
		return res.status(400).send({
			date: new Date(),
			message: 'No data found.'
		})

	postCallback(req.body, (err, result) => {
		if (err)
			return res.status(403).send({
				date: new Date(),
				message: `A problem has been detected while saving your data: ${err.message}`
			})
		res.status(201).send({
			date: new Date(),
			message: 'Finished Product successfully added.'
		})
	})
}

export default addOne
