import { Router, Request, Response } from 'express'
import Path from 'path'
import postAsync from '../controllers/visitor/post'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
	if (req.visitor) {
		postAsync(req.visitor)
		console.log('Visitor information has been recorded.')
	} else {
		console.warn('Someone visited but does not find GEO information. IP Address:', req.ip)
	}
	res.sendFile(Path.join(__dirname, '../public'))
})

export default router
