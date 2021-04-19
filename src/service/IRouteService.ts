import { IOriginDestinyDTO } from '../domain/Dtos/OriginDestinyDTO'
import { IRouteDTO } from '../domain/Dtos/RouteDto'
import { IRoutePriceDTO } from '../domain/Dtos/RoutePriceDTO'

export interface IRouteService {
    createRoute(route: IRouteDTO): Promise<void>
    getMinorPriceRoute(originDestiny: IOriginDestinyDTO): Promise<IRoutePriceDTO>
}
