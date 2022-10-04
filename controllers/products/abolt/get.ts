import Moment from 'moment'
import model from '../../../models/products/abolt'

export type AnchorBoltQuery = {
	from?: string
	to?: string
	sort?: string
	diameter?: string
	steel?: string
	inches?: string
	mm?: string
	bend?: string
	thread?: string
	hexNut?: string
	fW?: string
}

const findAsync = async (
	_id: string | null,
	{
		bend,
		diameter,
		from,
		inches,
		mm,
		sort,
		steel,
		thread,
		to,
		hexNut,
		fW
	}: AnchorBoltQuery
): Promise<Array<AnchorBoltProps>> => {
	return model
		.find({
			$and: [
				from
					? {
							createdAt: {
								$gte: Moment(from, process.env.DATE_FORMAT)
									.startOf('day')
									.toDate()
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
				diameter ? { diameter } : {},
				steel ? { steel } : {},
				inches ? { lengthByInches: inches } : {},
				mm ? { lengthByMillimeter: mm } : {},
				thread ? { thread } : {},
				bend ? { bend } : {},
				hexNut ? { hexNut } : {},
				fW ? { fW } : {},
				_id ? { _id } : {}
			]
		})
		.sort({ createdAt: sort || 'asc' })
}

export { findAsync }
