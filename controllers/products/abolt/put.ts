import { Callback } from 'mongoose'
import model from '../../../models/products/abolt'

const putCallback = (
	_id: string,
	data: AnchorBoltProps,
	cb: Callback<AnchorBoltProps | null>
) =>
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
