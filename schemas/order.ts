import Mongoose from 'mongoose'
import FinishedProduct from './inventory/finished_product'
import Customer from './customer'
import Payment from './payment'
import Deliver from './deliver'

const schema = new Mongoose.Schema<OrderProps>(
	{
		items: [{ type: FinishedProduct, default: [] }],
		customer: {
			type: Customer,
			required: true
		},
		invoiceNumber: Number,
		payment: {
			type: Payment
		},
		delivery: { type: Deliver },
		status: [{ type: String }]
	},
	{
		timestamps: true
	}
)

export default schema
