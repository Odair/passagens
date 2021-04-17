import { IRouteDTO } from '../domain/Dtos/RouteDto'

export interface IRouteService {
    createRoute(route: IRouteDTO): Promise<void>
}
