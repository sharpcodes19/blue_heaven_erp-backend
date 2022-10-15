import { Router } from 'express'
import deleteById from '../../handlers/inventory/raw_material/delete'
import { getAll, getById } from '../../handlers/inventory/raw_material/get'
import { addOne, minusQuantity } from '../../handlers/inventory/raw_material/post'
import updateById from '../../handlers/inventory/raw_material/put'
import { csv } from '../../handlers/inventory/raw_material/upload'

const router = Router()

router.post('/csv', csv)
router.post('/', addOne)
router.post('/mq', minusQuantity)
router.get('/', getAll)
router.get('/:_id', getById)
router.put('/:_id', updateById)
router.delete('/:_id', deleteById)

export default router
