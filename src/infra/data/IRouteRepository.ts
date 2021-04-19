import { Route } from '../../domain/Entities/Route'

export interface IRouteRepository {
    save(route: Route): Promise<void>
    findAll(): Promise<Route[]>
}
