import { IRouteDTO } from '../../domain/Dtos/RouteDto'

export interface IRouteRepository {
    save(route: IRouteDTO): Promise<void>
}
