import { createConnection } from 'typeorm'
import { Route } from '../../domain/Entities/Route'

export const context = () => {
  createConnection({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: 3307,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    synchronize: true,
    logging: false,
    entities: [Route],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts']
  })
}
