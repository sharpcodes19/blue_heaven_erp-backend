import { Callback } from 'mongoose'
import model from '../../models/order'

const postCallback = (data: OrderProps, cb: Callback<OrderProps>) => model.create(data, cb)

export default postCallback
