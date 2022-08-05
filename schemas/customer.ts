import Mongoose from 'mongoose'

const schema = new Mongoose.Schema<CustomerProps>(
	{
		address: {
			type: String,
			required: true
		},
		contact: String,
		discount: Number,
		email: String,
		name: {
			type: String,
			required: true
		},
		remarks: String,
		status: String,
		tin: {
			type: String,
			required: true
		},
		csvSource: String,
		orders: [{ type: String }] // array of ids
	},
	{
		timestamps: true
	}
)

export default schema
