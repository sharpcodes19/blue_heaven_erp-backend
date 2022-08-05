import { Router } from 'express'
import { getAll, getById } from '../../handlers/inventory/raw_material/get'
import addOne from '../../handlers/inventory/raw_material/post'
import updateById from '../../handlers/inventory/raw_material/put'

const router = Router()

router.post('/', addOne)
router.get('/', getAll)
router.get('/:_id', getById)
router.put('/:_id', updateById)

export default router
