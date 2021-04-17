import { RouteController } from '../application/controllers/RouteController'
import { MySqlRouteRepository } from '../infra/data/implementations/MySqlRouteRepository'
import { RouteService } from '../service/implementations/RouteService'

const mysqlRouteRepository = new MySqlRouteRepository()
const routeService = new RouteService(mysqlRouteRepository)

const routeController = new RouteController(routeService)

export { routeController }
