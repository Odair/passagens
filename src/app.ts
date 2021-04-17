import express from 'express'
import { router } from './routes'
import { context } from './infra/context/createConnection'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()

context()

app.use(express.json())
app.use(router)

export { app }
