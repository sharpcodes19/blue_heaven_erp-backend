import { Router } from 'express'
import rawMaterialRouter from './raw_material_router'
import finishedProductRouter from './finished_product_router'

const router = Router()

router.use('/finished-product', finishedProductRouter)
router.use('/raw-material', rawMaterialRouter)

export default router
