import { Router } from 'express'
// import { csv } from '../handlers/quotation/upload'
import deleteById from '../handlers/quotation/delete'
import { getAll, getById } from '../handlers/quotation/get'
import addOne from '../handlers/quotation/post'
import updateById from '../handlers/quotation/put'

const router = Router()

// router.post('/csv', csv)
router.post('/', addOne)
router.get('/', getAll)
router.get('/:_id', getById)
router.delete('/:_id', deleteById)
router.put('/:_id', updateById)

export default router
