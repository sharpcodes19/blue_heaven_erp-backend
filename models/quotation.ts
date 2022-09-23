import Mongoose from 'mongoose'
import schema from '../schemas/quotation'

export default Mongoose.model('quotations', schema)
