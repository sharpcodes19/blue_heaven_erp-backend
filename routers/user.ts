import { Router } from 'express'
import { loginByCredential } from '../handlers/user/get'
import addOne from '../handlers/user/post'

const router = Router()

router.post('/', addOne)
router.get('/login', loginByCredential)
// router.get('/', getAll)
// router.get('/:_id', getById)

export default router
