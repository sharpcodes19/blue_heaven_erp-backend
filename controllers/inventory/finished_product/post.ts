import { Callback } from 'mongoose'
import model from '../../../models/inventory/finished_product'

const postCallback = (data: FinishedProductProps, cb: Callback<FinishedProductProps>) => model.create(data, cb)

export default postCallback
