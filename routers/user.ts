import { Router } from 'express'
import { addOne, login } from '../handlers/user/post'

const router = Router()

router.post('/', addOne)
router.get('/login', login)
// router.get('/', getAll)
// router.get('/:_id', getById)

export default router
