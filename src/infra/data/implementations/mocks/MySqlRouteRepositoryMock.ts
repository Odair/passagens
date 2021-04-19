import { Route } from '../../../../domain/Entities/Route'
import { IRouteRepository } from '../../IRouteRepository'

export class MySqlRouteRepositoryMock implements IRouteRepository {
  save (route: Route): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findAll (): Promise<Route[]> {
    throw new Error('Method not implemented.')
  }
}
