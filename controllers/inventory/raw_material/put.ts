import { Callback } from 'mongoose'
import model from '../../../models/inventory/raw_material'

const putCallback = (_id: string, data: RawMaterialProps, cb: Callback<RawMaterialProps | null>) =>
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
