import Mongoose from 'mongoose'

const schema = new Mongoose.Schema<AnchorBoltProps>(
	{
		diameter: String,
		steel: String,
		lengthByInches: String,
		lengthByMillimeter: String,
		bend: String,
		thread: String,
		price: String,
		hexNut: String,
		hexNutPrice: String,
		hexNutQuantity: String,
		fW: String,
		fWPrice: String,
		fWQuantity: String,
		totalPerSet: String,
		totalPrice: String,
		csvSource: String
	},
	{
		timestamps: true
	}
)

export default schema
