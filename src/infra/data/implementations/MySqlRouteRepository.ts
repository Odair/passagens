import { IRouteRepository } from '../IRouteRepository'
import { Route } from '../../../domain/Entities/Route'
import { getRepository } from 'typeorm'

export class MySqlRouteRepository implements IRouteRepository {
  async findAll (): Promise<Route[]> {
    const result = await getRepository(Route).find()

    return result
  }

  async save (route: Route): Promise<void> {
    await getRepository(Route).save(route)
  }
}
