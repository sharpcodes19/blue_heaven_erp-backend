import { Callback } from 'mongoose'
import model from '../../models/quotation'

const postCallback = (data: QuotationProps, cb: Callback<QuotationProps>) => model.create(data, cb)

export default postCallback
