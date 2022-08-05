import Mongoose from 'mongoose'
import schema from '../../schemas/inventory/finished_product'

export default Mongoose.model('inventory-finished-products', schema)
