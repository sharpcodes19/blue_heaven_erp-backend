import { Request, Response } from 'express'
import { findAsync } from '../../controllers/order/get'

type Query = {
	from?: string
	to?: string
	sort?: 'desc' | 'asc'
}

type Params = {
	_id: string
}

const getById = async (req: Request<Params, unknown, unknown, Query>, res: Response<ResponseBaseProps<OrderProps>>) => {
	const { query, params } = req
	const { from, to, sort } = query
	const { _id } = params

	try {
		const packet: Array<OrderProps> = await findAsync(_id, from, to, sort)
		if (!packet.length)
			return res.status(403).send({
				date: new Date(),
				message: `Order with ID of ${_id} from was not found.`
			})
		return res.send({
			date: new Date(),
			message: `Order with ID of ${_id} from ${from || 'beginning'} to ${to || 'end'}`,
			packet: packet[0]
		})
	} catch (err) {
		res.status(500).send({
			date: new Date(),
			message: 'Server error. Please debug the system to see what problems were occuring.'
		})
	}
}

const getAll = async (
	req: Request<{}, unknown, unknown, Query>,
	res: Response<ResponseBaseProps<Array<OrderProps>>>
) => {
	const { query } = req
	const { from, to, sort } = query

	try {
		const packet: Array<OrderProps> = await findAsync(undefined, from, to, sort)
		res.send({
			date: new Date(),
			message: `Orders from ${from || 'beginning'} to ${to || 'end'}`,
			packet
		})
	} catch (err) {
		res.status(500).send({
			date: new Date(),
			message: 'Server error. Please debug the system to see what problems were occuring.'
		})
	}
}

export { getById, getAll }
