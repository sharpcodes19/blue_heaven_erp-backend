import { Request, Response } from 'express'
import putCallback from '../../controllers/customer/put'

type Params = {
	_id: string
}

const updateById = async (req: Request<Params, {}, CustomerProps>, res: Response<ResponseBaseProps<CustomerProps>>) => {
	const { _id } = req.params

	if (!_id)
		return res.status(400).send({
			date: new Date(),
			message: 'Cannot determine which customer should modify.'
		})

	if (!req.body)
		return res.status(400).send({
			date: new Date(),
			message: 'No data found.'
		})

	putCallback(_id, req.body, (err, packet) => {
		if (err)
			return res.status(403).send({
				date: new Date(),
				message: `A problem has been detected while saving your data: ${err.message}`
			})
		res.send({
			date: new Date(),
			message: 'Customer successfully updated.',
			packet
		})
	})
}

export default updateById
