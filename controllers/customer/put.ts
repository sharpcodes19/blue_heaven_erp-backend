import { Callback } from 'mongoose'
import model from '../../models/customer'

const putCallback = (_id: string, data: CustomerProps, cb: Callback<CustomerProps | null>) =>
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
