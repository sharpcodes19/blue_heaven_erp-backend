import { Router } from 'express'
import aboltRouter from './abolt'

const router = Router()

router.use('/abolt', aboltRouter)

export default router
