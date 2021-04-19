import { IRouteDTO } from '../../domain/Dtos/RouteDto'

export function validateBody (routeDTO: IRouteDTO): boolean {
  if (routeDTO.from && routeDTO.from !== '' && routeDTO.to && routeDTO.to !== '' && routeDTO.price && routeDTO.price !== 0) {
    return true
  } else {
    return false
  }
}
