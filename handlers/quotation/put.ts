import { Request, Response } from 'express'
import putCallback from '../../controllers/quotation/put'

type Params = {
	_id: string
}

const updateById = async (
	req: Request<Params, {}, QuotationProps>,
	res: Response<ResponseBaseProps<QuotationProps>>
) => {
	const { _id } = req.params

	if (!_id)
		return res.status(400).send({
			date: new Date(),
			message: 'Cannot determine which quotation should modify.'
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
			message: 'Quotation successfully updated.',
			packet
		})
	})
}

export default updateById
