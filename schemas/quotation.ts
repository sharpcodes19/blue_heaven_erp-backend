import Mongoose from 'mongoose'
import FinishedProductSchema from './inventory/finished_product'

const schema = new Mongoose.Schema<QuotationProps>(
	{
		customerId: String,
		items: [{ type: FinishedProductSchema }],
		timeLead: Number,
		label: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
)

export default schema
