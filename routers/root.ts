import { Router, Request, Response } from 'express'
import Path from 'path'
import postVisitorInfo from '../controllers/visitor/post'

const rootRouter: Router = Router()

rootRouter.get('/', (req: Request, res: Response) => {
	if (req.visitor) {
		postVisitorInfo(req.visitor)
		console.log('Visitor information has been recorded.')
	} else {
		console.warn('Someone visited but does not find GEO information. IP Address:', req.ip)
	}
	res.sendFile(Path.join(__dirname, '../public'))
})

export default rootRouter
