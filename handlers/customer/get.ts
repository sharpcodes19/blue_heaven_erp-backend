import { Request, Response } from 'express'
import { findAsync } from '../../controllers/customer/get'

type Query = {
	from?: string
	to?: string
	sort?: 'desc' | 'asc'
}

type Params = {
	_id: string
}

const getByIdAsync = async (
	req: Request<Params, unknown, unknown, Query>,
	res: Response<ResponseBaseProps<CustomerProps>>
) => {
	const { query, params } = req
	const { from, to, sort } = query
	const { _id } = params

	try {
		const packet: Array<CustomerProps> = await findAsync(_id, from, to, sort)
		if (!packet.length)
			return res.status(403).send({
				date: new Date(),
				message: `Customer with ID of ${_id} from was not found.`
			})
		return res.send({
			date: new Date(),
			message: `Customer with ID of ${_id} from ${from || 'beginning'} to ${to || 'end'}`,
			packet: packet[0]
		})
	} catch (err) {
		res.status(500).send({
			date: new Date(),
			message: 'Server error. Please debug the system to see what problems were occuring.'
		})
	}
}

const getAllAsync = async (
	req: Request<{}, unknown, unknown, Query>,
	res: Response<ResponseBaseProps<Array<CustomerProps>>>
) => {
	const { query } = req
	const { from, to, sort } = query

	try {
		const packet: Array<CustomerProps> = await findAsync(undefined, from, to, sort)
		res.send({
			date: new Date(),
			message: `Customers from ${from || 'beginning'} to ${to || 'end'}`,
			packet
		})
	} catch (err) {
		res.status(500).send({
			date: new Date(),
			message: 'Server error. Please debug the system to see what problems were occuring.'
		})
	}
}

export { getByIdAsync, getAllAsync }
