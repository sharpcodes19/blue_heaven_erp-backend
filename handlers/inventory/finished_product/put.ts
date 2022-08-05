import { Request, Response } from 'express'
import putCallback from '../../../controllers/inventory/finished_product/put'

type Params = {
	_id: string
}

const updateById = async (
	req: Request<Params, {}, FinishedProductProps>,
	res: Response<ResponseBaseProps<FinishedProductProps>>
) => {
	const { _id } = req.params

	if (!_id)
		return res.status(400).send({
			date: new Date(),
			message: 'Cannot determine which finished product should modify.'
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
			message: 'Finished product successfully updated.',
			packet: packet
		})
	})
}

export default updateById
