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

	const packet: Array<CustomerProps> = await findAsync(_id, from, to, sort)
	return res.send({
		date: new Date(),
		message: `Transactions of ${_id} from ${from} to ${to}`,
		packet: packet[0]
	})
}

const getAllAsync = async (
	req: Request<{}, unknown, unknown, Query>,
	res: Response<ResponseBaseProps<Array<CustomerProps>>>
) => {
	const { query } = req
	const { from, to, sort } = query

	const packet: Array<CustomerProps> = await findAsync(undefined, from, to, sort)
	return res.send({
		date: new Date(),
		message: `Transactions from ${from} to ${to}`,
		packet
	})
}

export { getByIdAsync, getAllAsync }
