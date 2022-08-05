import { Router } from 'express'
import { getAll, getById } from '../../handlers/inventory/finished_product/get'
import addOne from '../../handlers/inventory/finished_product/post'
import updateById from '../../handlers/inventory/finished_product/put'

const router = Router()

router.post('/', addOne)
router.get('/', getAll)
router.get('/:_id', getById)
router.put('/:_id', updateById)

export default router
