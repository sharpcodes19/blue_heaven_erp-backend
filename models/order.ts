import Mongoose from 'mongoose'
import schema from '../schemas/order'

export default Mongoose.model('order', schema)
