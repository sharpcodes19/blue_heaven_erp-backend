import Moment from 'moment'
import { SortOrder } from 'mongoose'
import model from '../../../models/inventory/raw_material'

export type RawMaterialFindKeywords = {
	_id?: string
	type?: string
	diameter?: string
	weight?: string
	name?: string
}

const findAsync = async (
	{ _id, diameter, type, weight, name }: RawMaterialFindKeywords,
	from?: string,
	to?: string,
	sort?: SortOrder
): Promise<Array<RawMaterialProps>> => {
	return model
		.find({
			$and: [
				from
					? {
							createdAt: {
								$gte: Moment(from, process.env.DATE_FORMAT).startOf('day').toDate()
							}
					  }
					: {},
				to
					? {
							createdAt: {
								$lte: Moment(to, process.env.DATE_FORMAT).endOf('day').toDate()
							}
					  }
					: {},
				_id ? { _id } : {},
				diameter ? { diameter } : {},
				type ? { type } : {},
				weight ? { weight } : {},
				name ? { name } : {}
			]
		})
		.sort({ createdAt: sort || 'asc' })
}

export { findAsync }
