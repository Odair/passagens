import { IOriginDestinyDTO } from '../../../domain/Dtos/OriginDestinyDTO'
import { IRouteDTO } from '../../../domain/Dtos/RouteDto'
import { IRoutePriceDTO } from '../../../domain/Dtos/RoutePriceDTO'
import { IRouteService } from '../../IRouteService'

export class RouteService implements IRouteService {
  createRoute (route: IRouteDTO): Promise<void> {
    throw new Error('Method not implemented.')
  }

  getMinorPriceRoute (originDestiny: IOriginDestinyDTO): Promise<IRoutePriceDTO> {
    throw new Error('Method not implemented.')
  }
}
