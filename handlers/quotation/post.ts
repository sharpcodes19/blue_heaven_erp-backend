import { Request, Response } from 'express'
import postCallback from '../../controllers/quotation/post'

const addOne = async (req: Request<{}, {}, QuotationProps>, res: Response<ResponseBaseProps>) => {
	if (!req.body || !req.body.customerId)
		return res.status(400).send({
			date: new Date(),
			message: 'No customer found.'
		})

	postCallback(req.body, (err, packet) => {
		if (err)
			return res.status(403).send({
				date: new Date(),
				message: `A problem has been detected while saving your data: ${err.message}`
			})
		res.status(201).send({
			date: new Date(),
			message: 'Quotation successfully added.'
		})
	})
}

export default addOne
