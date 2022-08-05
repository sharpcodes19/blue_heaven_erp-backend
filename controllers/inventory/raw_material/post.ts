import { Callback } from 'mongoose'
import model from '../../../models/inventory/raw_material'

const postCallback = (data: RawMaterialProps, cb: Callback<RawMaterialProps>) => model.create(data, cb)

export default postCallback
