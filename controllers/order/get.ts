import Moment from 'moment'
import model from '../../models/order'

const findAsync = async (_id?: string, from?: string, to?: string, sort?: string): Promise<Array<OrderProps>> => {
	return model
		.find({
			// 'items.0': { $exists: true },
			$and: [
				from
					? {
							'delivery.date': {
								$gte: Moment(from, process.env.DATE_FORMAT).startOf('day').toDate()
							}
					  }
					: {},
				to
					? {
							'delivery.date': {
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
