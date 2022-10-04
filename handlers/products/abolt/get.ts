import { Request, Response } from 'express'
import {
	AnchorBoltQuery,
	findAsync
} from '../../../controllers/products/abolt/get'

type Params = {
	_id: string
}

const getById = async (
	req: Request<Params, unknown, unknown, AnchorBoltQuery>,
	res: Response<ResponseBaseProps<AnchorBoltProps>>
) => {
	const { query, params } = req
	const { from, to, sort } = query
	const { _id } = params

	try {
		const packet: Array<AnchorBoltProps> = await findAsync(_id, {
			from,
			to,
			sort
		})
		if (!packet.length)
			return res.status(403).send({
				date: new Date(),
				message: `ABolt with ID of ${_id} from was not found.`
			})
		return res.send({
			date: new Date(),
			message: `ABolt with ID of ${_id} from ${from || 'beginning'} to ${
				to || 'end'
			}`,
			packet: packet[0]
		})
	} catch (err) {
		console.error(err)
		res.status(500).send({
			date: new Date(),
			message:
				'Server error. Please debug the system to see what problems were occuring.'
		})
	}
}
const getAll = async (
	req: Request<{}, unknown, unknown, AnchorBoltQuery>,
	res: Response<ResponseBaseProps<Array<AnchorBoltProps>>>
) => {
	const { query } = req
	const { from, to } = query

	try {
		const packet: Array<AnchorBoltProps> = await findAsync(null, query)
		res.send({
			date: new Date(),
			message: `ABolts from ${from || 'beginning'} to ${to || 'end'}`,
			packet
		})
	} catch (err) {
		console.error(err)
		res.status(500).send({
			date: new Date(),
			message:
				'Server error. Please debug the system to see what problems were occuring.'
		})
	}
}

export { getById, getAll }
