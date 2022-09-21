import Mongoose from 'mongoose'
import FinishedProduct from './inventory/finished_product'

const schema = new Mongoose.Schema<OrderProps>(
	{
		items: [{ type: FinishedProduct, default: [] }],
		customerId: String,
		invoiceNumber: Number,
		status: [{ type: String }],
		orderDate: Date,
		dueDate: Date,
		totalCost: Number,
		amountPaid: Number,
		paymentMethod: String,
		paymentDate: String,
		ewtAmount: Number,
		balancePayment: [
			{
				type: {
					amount: Number,
					paymentMethod: String,
					paymentDate: String
				}
			}
		],
		remarks: String,
		deliveryDate: String,
		shippingFee: Number,
		deliveryLocation: String
	},
	{
		timestamps: true
	}
)

export default schema
