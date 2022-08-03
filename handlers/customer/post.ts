import { Request, Response } from 'express'
import postAsync from '../../controllers/customer/post'

const addCustomerAsync = async (req: Request<{}, {}, CustomerProps>, res: Response<ResponseBaseProps>) => {
	if (!req.body || !req.body.name)
		return res.status(400).send({
			date: new Date(),
			message: 'No data found.'
		})

	try {
		await postAsync(req.body)
		res.send({
			date: new Date(),
			message: 'Customer successfully added.'
		})
	} catch (err: any) {
		res.status(403).send({
			date: new Date(),
			message: `A problem has been detected while saving your data: ${err.message}`
		})
	}
}

export default addCustomerAsync
