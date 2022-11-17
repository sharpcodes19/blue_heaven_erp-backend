import Moment from 'moment'
import bcrypt from 'bcrypt'
import model from '../../models/user'
import { SortOrder } from 'mongoose'

const findAsync = async (
	_id?: string,
	from?: string,
	to?: string,
	sort?: SortOrder
): Promise<Array<UserProps>> => {
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

const signInAsync = (username: string, password: string) => {
	return new Promise<boolean>((resolve, reject) => {
		model.findOne({ username }, (error: any, user: UserProps) => {
			if (error) return reject(`User ${username} not found. ${error}`)

			bcrypt.compare(password, user?.password, function (error, isMatch) {
				if (error) return resolve(isMatch)

				resolve(isMatch)
			})
		})
	})
}

export { findAsync, signInAsync }
