import { Router } from 'express'
import { getAll, getById } from '../handlers/order/get'
import addOne from '../handlers/order/post'
import { csv } from '../handlers/order/upload'

const router = Router()

router.post('/csv', csv)
router.post('/', addOne)
router.get('/:_id', getById)
router.get('/', getAll)

export default router
