import { Router } from 'express'
import { routeController } from './IoC'

const router = Router()

router.get('/healthcheck', (request, response) => {
  return response.status(200).json({ message: 'Service is online' })
})

router.post('/route', (request, response) => {
  return routeController.create(request, response)
})

router.get('/quote/:from/:to', (request, response) => {
  return routeController.getMinorPriceRoute(request, response)
})

export { router }
