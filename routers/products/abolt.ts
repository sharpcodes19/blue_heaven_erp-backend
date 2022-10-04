import { Router } from 'express'
import { deleteAll, deleteById } from '../../handlers/products/abolt/delete'
import { getAll, getById } from '../../handlers/products/abolt/get'
import addOne from '../../handlers/products/abolt/post'
import updateById from '../../handlers/products/abolt/put'
import { xlsx } from '../../handlers/products/abolt/upload'

const router = Router()

router.post('/', addOne)
router.post('/xlsx/:sheetName', xlsx)
router.post('/xlsx', xlsx)
router.get('/', getAll)
router.get('/:_id', getById)
router.put('/:_id', updateById)
router.delete('/:_id', deleteById)
router.delete('/', deleteAll)

export default router
