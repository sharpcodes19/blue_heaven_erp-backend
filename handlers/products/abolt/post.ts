import { Request, Response } from 'express'
import postCallback from '../../../controllers/products/abolt/post'

const addOne = async (
	req: Request<{}, {}, AnchorBoltProps>,
	res: Response<ResponseBaseProps>
) => {
	if (!req.body)
		return res.status(400).send({
			date: new Date(),
			message: 'No data found.'
		})

	postCallback(req.body, (err, packet) => {
		if (err)
			return res.status(403).send({
				date: new Date(),
				message: `A problem has been detected while saving your data: ${err.message}`
			})
		res.status(201).send({
			date: new Date(),
			message: 'Product successfully added.'
		})
	})
}

export default addOne
