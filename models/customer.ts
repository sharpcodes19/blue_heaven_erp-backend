import Mongoose from 'mongoose'
import schema from '../schemas/customer'

export default Mongoose.model('customers', schema)
