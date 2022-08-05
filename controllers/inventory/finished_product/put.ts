import { Callback } from 'mongoose'
import model from '../../../models/inventory/finished_product'

const putCallback = (_id: string, data: FinishedProductProps, cb: Callback<FinishedProductProps | null>) =>
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
