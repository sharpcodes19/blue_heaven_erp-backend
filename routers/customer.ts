import { Router } from 'express'
import { csv } from '../controllers/customer/upload'
import deleteById from '../handlers/customer/delete'
import { getAll, getById } from '../handlers/customer/get'
import addOne from '../handlers/customer/post'
import updateById from '../handlers/customer/put'

const router = Router()

router.post('/csv', csv)
router.post('/', addOne)
router.get('/', getAll)
router.get('/:_id', getById)
router.delete('/:_id', deleteById)
router.put('/:_id', updateById)

export default router
