import { Request, Response, NextFunction } from 'express'
import JWT from 'jsonwebtoken'

const secret: string = process.env.AUTH_TOKEN_SECRET_KEY!

const token = (req: Request, res: Response<ResponseBaseProps>, next: NextFunction) => {
	const auth = req.headers.authorization
	if (!auth)
		return res.status(401).send({
			date: new Date(),
			message: 'You do not have an authorization to perform this request.'
		})

	const value = auth.split(' ')[1]
	if (!value)
		return res.status(400).send({
			date: new Date(),
			message: 'Your token is malformed.'
		})

	JWT.verify(value, secret, (err, decoded) => {
		if (err)
			return res.status(205).send({
				date: new Date(),
				message: 'Your token is invalid or expired. Please login to renew your token.'
			})

		next()
	})
}

export default token
