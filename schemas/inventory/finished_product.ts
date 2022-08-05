import Mongoose from 'mongoose'

const schema = new Mongoose.Schema<FinishedProductProps>(
	{
		name: String,
		type: String,
		size: String,
		threadType: String,
		threadLength: String,
		finishType: String,
		weight: Number,
		length: Number,
		width: Number,
		cutLength: Number,
		holes: Number,
		holeSizes: Number,
		price: Number,
		quantity: Number,
		remarks: String,
		id: {
			type: String,
			unique: true
		}
	},
	{
		timestamps: true
	}
)

export default schema
