import { Callback } from 'mongoose'
import model from '../../../models/products/abolt'

const postCallback = (data: AnchorBoltProps, cb: Callback<AnchorBoltProps>) =>
	model.create(data, cb)

export default postCallback
