import { IRouteDTO } from '../../domain/Dtos/RouteDto'
import { IRouteRepository } from '../../infra/data/IRouteRepository'
import { IRouteService } from '../IRouteService'

export class RouteService implements IRouteService {
    private routeRepository: IRouteRepository

    constructor (routeRepository: IRouteRepository) {
      this.routeRepository = routeRepository
    }

    async createRoute (route: IRouteDTO): Promise<void> {
      const result = await this.routeRepository.save(route)
      return result
    }
}
