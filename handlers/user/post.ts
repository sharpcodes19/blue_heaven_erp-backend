import { Request, Response } from 'express'
import { signInAsync } from '../../controllers/user/get'
import postCallback from '../../controllers/user/post'

type LoginBody = {
	username: string
	password: string
}

const addOne = async (req: Request<{}, {}, UserProps>, res: Response<ResponseBaseProps>) => {
	if (!req.body)
		return res.status(400).send({
			date: new Date(),
			message: 'No data found.'
		})

	postCallback(req.body, (err, packet) => {
		if (err)
			return res.status(403).send({
				date: new Date(),
				message: `A problem has been detected while saving your data: ${err.message}`
			})
		res.status(201).send({
			date: new Date(),
			message: 'Customer successfully added.'
		})
	})
}

const login = async (req: Request<unknown, unknown, LoginBody, unknown>, res: Response<ResponseBaseProps<boolean>>) => {
	if (!req.body)
		return res.status(400).send({
			date: new Date(),
			message: 'No data found.'
		})

	const { username, password } = req.body

	try {
		const packet: boolean = await signInAsync(username, password)
		return res.send({
			date: new Date(),
			message: packet ? `Welcome ${username}` : 'Invalid credentials',
			packet
		})
	} catch (err) {
		console.error(err)
		return res.status(500).send({
			date: new Date(),
			message: 'Please try to log-in later.'
		})
	}
}

export { addOne, login }
