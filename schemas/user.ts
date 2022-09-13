import Mongoose, { Callback } from 'mongoose'
import bcrypt from 'bcrypt'

const schema = new Mongoose.Schema<UserProps>(
	{
		username: String,
		password: String
	},
	{
		timestamps: true
	}
).pre('save', function (next) {
	const user = this
	if (!user.isModified('password')) return next()

	bcrypt.genSalt(+process.env.BCRYPT_SALT_ROUNDS!, function (error, salt) {
		if (error) return next(error)

		bcrypt.hash(user.password, salt, function (error, hash) {
			user.password = hash
			next()
		})
	})
})

export default schema
