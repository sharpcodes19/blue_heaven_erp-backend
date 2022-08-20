import Mongoose from 'mongoose'

const schema = new Mongoose.Schema<DeliverProps>({
	address: String,
	date: Date,
	remarks: String
})

export default schema
