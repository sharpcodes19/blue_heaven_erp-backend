import { Router } from 'express'
import deleteOneAsync from '../handlers/customer/delete'
import { getAllAsync, getByIdAsync } from '../handlers/customer/get'
import addCustomerAsync from '../handlers/customer/post'
import updateCustomerAsync from '../handlers/customer/put'

const router = Router()

router.post('/', addCustomerAsync)
router.get('/', getAllAsync)
router.get('/:_id', getByIdAsync)
router.delete('/:_id', deleteOneAsync)
router.put('/:_id', updateCustomerAsync)

export default router
