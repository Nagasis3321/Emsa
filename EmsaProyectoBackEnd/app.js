import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import mongoSanitize from 'express-mongo-sanitize'
import xssClean from 'xss-clean'
import hpp from 'hpp'
import cargaRoutes from './routes/cargaRoutes.js'
import errHandler from './utils/errHandler.js'

const app = express()

app.use(helmet())

const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: 'Too many requests from this IP, please try again in an hour',
})
app.use(limiter)

app.use(express.json({ limit: '10kb' }))

app.use(mongoSanitize())

app.use(xssClean())

app.use(hpp())

app.use(compression())

app.use('/carga', cargaRoutes)

app.use(errHandler)

export default app
