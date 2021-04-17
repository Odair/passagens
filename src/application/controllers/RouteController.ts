import { Request, Response } from 'express'
import { IRouteDTO } from '../../domain/Dtos/RouteDto'
import { IRouteService } from '../../service/IRouteService'

export class RouteController {
  private routeService: IRouteService

  constructor (routeService: IRouteService) {
    this.routeService = routeService
  }

  async create (request: Request, response: Response): Promise<Response> {
    try {
      const route: IRouteDTO = request.body

      this.routeService.createRoute(route)

      return response.status(201).json('')
    } catch (error) {
      return response.status(400).json({ msg: error.message })
    }
  }

  async getMinorPriceRoute (request: Request, response: Response): Promise<Response> {
    try {
      return response.status(200).json('')
    } catch (error) {
      return response.status(400).json({ msg: error.message })
    }
  }
}
