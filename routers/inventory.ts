import { Router } from 'express'
import { getAllAsync, getByIdAsync } from '../handlers/inventory/raw_material/get'
import addRawMaterialAsync from '../handlers/inventory/raw_material/post'
import updateRawMaterialAsync from '../handlers/inventory/raw_material/put'

const router = Router()

router.post('/raw-material', addRawMaterialAsync)
router.get('/raw-material', getAllAsync)
router.get('/raw-material/:_id', getByIdAsync)
router.put('/raw-material/:_id', updateRawMaterialAsync)

export default router
