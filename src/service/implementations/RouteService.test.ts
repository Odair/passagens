import { MySqlRouteRepositoryMock } from '../../infra/data/implementations/mocks/MySqlRouteRepositoryMock'
import { RouteService } from './RouteService'

describe('RouteService tests', () => {
  let mockedRouteRepository = new MySqlRouteRepositoryMock()
  let routeService = new RouteService(mockedRouteRepository)

  beforeEach(() => {
    mockedRouteRepository = new MySqlRouteRepositoryMock()
    routeService = new RouteService(mockedRouteRepository)
  })

  it('Should test createRoute method and return a mockResult', async () => {
    const mockRoute = { from: 'test', to: 'test2', price: 1 }

    mockedRouteRepository.save = jest.fn().mockResolvedValue(mockRoute)

    const result = await routeService.createRoute(mockRoute)

    expect(result).toEqual(mockRoute)
  })

  it('Should test createRoute method and return an error', async () => {
    const mockRoute = { from: '', to: '', price: 0 }

    mockedRouteRepository.save = jest.fn().mockResolvedValue(mockRoute)

    try {
      await routeService.createRoute(mockRoute)
    } catch (err) {
      expect(err.message).toEqual('Body is invalid. Some props are empty')
    }
  })

  it('Should test getMinorPriceRoute method and return a mockResult', async () => {
    const mockRoute = [{ from: 'test', to: 'test2', price: 1 }]
    const mockResult = { route: 'test,test2', price: 1 }

    mockedRouteRepository.findAll = jest.fn().mockResolvedValue(mockRoute)
    routeService.isCached = jest.fn().mockResolvedValue(null)

    const result = await routeService.getMinorPriceRoute({ from: 'test', to: 'test2' })
    expect(result).toEqual(mockResult)
  })

  it('Should test getMinorPriceRoute method and return a mockResult from cache', async () => {
    const mockRoute = [{ from: 'test', to: 'test2', price: 1 }]
    const mockResult = { route: 'test,test2', price: 1 }

    mockedRouteRepository.findAll = jest.fn().mockResolvedValue(mockRoute)
    routeService.isCached = jest.fn().mockResolvedValue(mockResult)

    const result = await routeService.getMinorPriceRoute({ from: 'test', to: 'test2' })
    expect(result).toEqual(mockResult)
  })

  it('Should test isCached method and return a mockResult', async () => {
    const result = await routeService.isCached({ from: 'test', to: 'test2' })
    expect(result).toEqual(null)
  })
})
