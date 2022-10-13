import Mongoose from 'mongoose'

const schema = new Mongoose.Schema<FinishedProductProps>(
	{
		name: {
			type: String,
			required: true
		},
		type: String,
		size: String,
		threadType: String,
		threadLength: [{ type: String }],
		finishType: String,
		weight: Number,
		length: String,
		width: String,
		cutLength: Number,
		holeQuantity: Number,
		holeSizes: [{ type: String }],
		price: Number,
		quantity: Number,
		remarks: String,
		csvSource: String,
		lead: String,
		orderItemId: String,
		quotationId: String,
		dueDate: String,
		washer: String,
		fWPrice: Number,
		fWQuantity: Number,
		hexNut: String,
		hexNutPrice: Number,
		hexNutQuantity: Number,
		totalPricePerSet: Number
	},
	{
		timestamps: true
	}
)

export default schema
