import { Callback } from 'mongoose'
import model from '../../models/quotation'

const putCallback = (_id: string, data: QuotationProps, cb: Callback<QuotationProps | null>) =>
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
