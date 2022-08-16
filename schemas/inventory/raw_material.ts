import Mongoose from 'mongoose'

const schema = new Mongoose.Schema<RawMaterialProps>(
	{
		name: String,
		type: String,
		diameter: String,
		weight: Number,
		price: Number,
		quantity: Number,
		orderDate: Date,
		deliveredDate: Date,
		remarks: String,
		id: {
			type: String
		}
	},
	{
		timestamps: true
	}
)

export default schema
