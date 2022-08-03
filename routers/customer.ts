import { Router } from 'express'
import deleteOneAsync from '../handlers/customer/delete'
import { getAllAsync, getByIdAsync } from '../handlers/customer/get'
import addCustomerAsync from '../handlers/customer/post'

const router = Router()

router.post('/', addCustomerAsync)
router.get('/', getAllAsync)
router.get('/:_id', getByIdAsync)
router.delete('/:_id', deleteOneAsync)

export default router
