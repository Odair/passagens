import { IRouteRepository } from '../IRouteRepository'
import { Route } from '../../../domain/Entities/Route'
import { getRepository } from 'typeorm'
import { IRouteDTO } from '../../../domain/Dtos/RouteDto'

export class MySqlRouteRepository implements IRouteRepository {
  async save (route: IRouteDTO): Promise<void> {
    await getRepository(Route).save(route)
  }
}
