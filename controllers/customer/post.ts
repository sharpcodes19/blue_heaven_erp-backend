import { Callback } from 'mongoose'
import model from '../../models/customer'

const postCallback = (data: CustomerProps, cb: Callback<CustomerProps>) => model.create(data, cb)

export default postCallback
