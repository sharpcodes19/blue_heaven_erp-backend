import Mongoose from 'mongoose'

const schema = new Mongoose.Schema<CustomerProps>(
	{
		address: String,
		contact: String,
		discount: Number,
		email: String,
		name: String,
		remarks: String,
		status: String,
		tin: String
	},
	{
		timestamps: true
	}
)

export default schema
