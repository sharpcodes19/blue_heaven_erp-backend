import { Router } from 'express'
import deleteById from '../../handlers/inventory/finished_product/delete'
import { getAll, getById } from '../../handlers/inventory/finished_product/get'
import addOne from '../../handlers/inventory/finished_product/post'
import updateById from '../../handlers/inventory/finished_product/put'
import { csv } from '../../handlers/inventory/finished_product/upload'

const router = Router()

router.post('/csv', csv)
router.post('/', addOne)
router.get('/', getAll)
router.get('/:_id', getById)
router.put('/:_id', updateById)
router.delete('/:_id', deleteById)

export default router
