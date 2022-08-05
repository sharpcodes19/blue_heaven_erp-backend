import Moment from 'moment'
import model from '../../../models/inventory/raw_material'

const findAsync = async (_id?: string, from?: string, to?: string, sort?: string): Promise<Array<RawMaterialProps>> => {
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
