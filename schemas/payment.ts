import Mongoose from 'mongoose'

const schema = new Mongoose.Schema<PaymentProps>({
	amount: Number,
	balance: Number,
	cost: Number,
	date: Date,
	ewt: Number,
	freightCost: Number,
	mode: String
})

export default schema
