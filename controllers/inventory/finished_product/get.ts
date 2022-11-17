import Moment from 'moment'
import { SortOrder } from 'mongoose'
import model from '../../../models/inventory/finished_product'

const findAsync = async (
	_id?: string,
	from?: string,
	to?: string,
	sort?: SortOrder
): Promise<Array<FinishedProductProps>> => {
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
				_id ? { _id } : {}
			]
		})
		.sort({ createdAt: sort || 'asc' })
}

export { findAsync }
