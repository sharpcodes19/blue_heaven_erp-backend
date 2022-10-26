import Moment from 'moment'
import model from '../../../models/products/abolt'

export type AnchorBoltQuery = {
	from?: string
	to?: string
	sort?: string
} & AnchorBoltProps

const findAsync = async (
	_id: string | null,
	{ from, sort, to }: AnchorBoltQuery
): Promise<Array<AnchorBoltProps>> => {
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

const findOneAsync = async (query: AnchorBoltProps): Promise<AnchorBoltProps | null> => {
	return model.findOne({
		$and: [
			{ diameter: query.diameter },
			{ steel: query.steel },
			// { lengthByInches: query.inches },
			{ lengthByMillimeter: query.lengthByMillimeter },
			{ thread: query.thread },
			{ bend: query.bend },
			{ hexNut: query.hexNut },
			{ fW: query.fW }
		]
	})
}

export { findAsync, findOneAsync }
