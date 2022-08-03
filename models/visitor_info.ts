import Mongoose from 'mongoose'
import VisitorInforSchema from '../schemas/visitor_info'

export default Mongoose.model('visitor', VisitorInforSchema)
