import { IForkRoutesDTO } from '../../domain/Dtos/ForkRoutesDTO'
import { IOriginDestinyDTO } from '../../domain/Dtos/OriginDestinyDTO'
import { IRouteDTO } from '../../domain/Dtos/RouteDto'
import { IRoutePriceDTO } from '../../domain/Dtos/RoutePriceDTO'
import { Route } from '../../domain/Entities/Route'
import { IRouteRepository } from '../../infra/data/IRouteRepository'
import { IRouteService } from '../IRouteService'
import Cache from '../../infra/cache'
import { validateBody } from '../utils/Validators'

export class RouteService implements IRouteService {
    private routeRepository: IRouteRepository

    constructor (routeRepository: IRouteRepository) {
      this.routeRepository = routeRepository
    }

    async getMinorPriceRoute (originDestiny: IOriginDestinyDTO): Promise<IRoutePriceDTO> {
      const cached = await this.isCached(`${originDestiny.from + originDestiny.to}`)
      if (cached != null) {
        return cached
      }
      const routes: any = await this.routeRepository.findAll()

      const forkRouteDTO: IForkRoutesDTO = {
        destination: '',
        arrive: originDestiny.from,
        previousArrive: '',
        routeJoin: [],
        routeInvalid: '',
        finalDestination: '',
        price: []
      }

      while (forkRouteDTO.destination !== originDestiny.to) {
        const filteredRoutes = routes.filter((r) => r.from === forkRouteDTO.arrive && r.to !== forkRouteDTO.routeInvalid)
        if (filteredRoutes.length > 0) {
          const minorDepartureRoute = filteredRoutes.reduce(function (prev, curr) {
            return parseInt(prev.price) < parseInt(curr.price) ? prev : curr
          })
          forkRouteDTO.routeJoin.push(forkRouteDTO.arrive)
          forkRouteDTO.price.push(parseInt(minorDepartureRoute.price))
          forkRouteDTO.destination = minorDepartureRoute.to
          forkRouteDTO.previousArrive = minorDepartureRoute.from
          forkRouteDTO.arrive = minorDepartureRoute.to
          forkRouteDTO.finalDestination = minorDepartureRoute.to
        } else {
          forkRouteDTO.routeInvalid = forkRouteDTO.arrive
          forkRouteDTO.arrive = forkRouteDTO.previousArrive
          forkRouteDTO.routeJoin = []
          forkRouteDTO.price = []
        }
      }

      forkRouteDTO.routeJoin.push(forkRouteDTO.finalDestination)
      const routesResult = forkRouteDTO.routeJoin.join()
      const priceResult = forkRouteDTO.price.reduce((total, num) => { return total + num })

      const minorPriceRoute: IRoutePriceDTO = { route: routesResult, price: priceResult }

      Cache.set(`${originDestiny.from + originDestiny.to}`, minorPriceRoute, 60)

      return minorPriceRoute
    }

    async createRoute (routeDTO: IRouteDTO): Promise<void> {
      if (!validateBody(routeDTO)) {
        throw new Error('Body is invalid. Some props are empty')
      }

      const route = new Route(routeDTO)
      const result = await this.routeRepository.save(route)
      return result
    }

    async isCached (key) {
      const cached = await Cache.get(key)
      return cached
    }
}
