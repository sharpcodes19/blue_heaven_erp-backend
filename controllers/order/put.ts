import { Callback } from 'mongoose'
import model from '../../models/order'

const putCallback = (_id: string, data: OrderProps, cb: Callback<OrderProps | null>) =>
	model.findOneAndUpdate(
		{ _id },
		data,
		{
			new: true,
			upsert: false
		},
		cb
	)

export default putCallback
