import { Router } from 'express'
import { routeController } from './IoC'

const router = Router()

router.get('/healthcheck', (request, response) => {
  return response.status(200).json({ message: 'Service is online' })
})

router.post('/route', (request, response) => {
  routeController.create(request, response)
  return response.status(201).json(response)
})

export { router }
