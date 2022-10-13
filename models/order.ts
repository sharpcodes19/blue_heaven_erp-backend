import Mongoose from 'mongoose'
import schema from '../schemas/order'

const makeId = (subLength: number) => {
	let result = ''
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	const charactersLength = characters.length
	for (let i = 0; i < subLength; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return `${Date.now().toString().substring(1, 3)}${result.toUpperCase()}`.trim()
}

schema.pre('save', function (next) {
	const order = this
	if (!order.isModified('quotationNumber')) order.quotationNumber = makeId(7)
	next()
})

export default Mongoose.model('order', schema)
