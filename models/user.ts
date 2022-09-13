import Mongoose from 'mongoose'
import schema from '../schemas/user'

export default Mongoose.model('users', schema)
