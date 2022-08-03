import Mongoose from 'mongoose'

const schema = new Mongoose.Schema<VisitorProps>(
	{
		city: String,
		regionName: String,
		regionCode: String,
		countryName: String,
		countryCode: String,
		latitude: Number,
		longitude: Number,
		mobile: Boolean,
		internetProvider: String,
		proxy: String,
		query: String,
		timezone: String,
		zip: String
	},
	{
		timestamps: true
	}
)

export default schema
