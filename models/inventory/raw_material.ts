import Mongoose from 'mongoose'
import schema from '../../schemas/inventory/raw_material'

export default Mongoose.model('inventory-raw-materials', schema)
