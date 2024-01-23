import { Router } from 'express'
import { createComputadora } from '../controllers/computadoraController.js'

const router = Router()

router.route('/computadora').post(createComputadora)

/*.get(authController.protect, eventController.getAllEvents)
.post(authController.protect, eventController.createEvent)

router
.route('/:id')
.get(authController.protect, eventController.getOneEvent)
.patch(authController.protect, eventController.updateEvent)
.delete(authController.protect, eventController.deleteEvent)*/

export default router
