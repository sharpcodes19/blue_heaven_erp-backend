import HTTP from 'http'
import cors from 'cors'
import dotEnv from 'dotenv'
import express, { Express } from 'express'
import Mongoose from 'mongoose'
import { Server } from 'socket.io'
import rootRouter from './routers/root'
import useSocket from './socket'
import customerRouter from './routers/customer'
import inventoryRouter from './routers/inventory/inventory_router'
import visitorInfo from './middlewares/visitor_info'

dotEnv.config()

const app: Express = express()
const port: number | undefined = +(process.env.PORT || 28174)
const server: HTTP.Server = HTTP.createServer(app)
const io = new Server<ServerToClientEvents, ClientToServerEvents, InterServerEvents, SocketData>(server, {
	cors: {
		origin: process.env.CORS_ORIGIN
	}
})

app.use(
	cors({
		origin: process.env.CORS_ORIGIN
	})
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(process.env.PUBLIC_FOLDER_PATH!))

// routes
app.use('/', visitorInfo, rootRouter)
app.use('/customer', customerRouter)
app.use('/inventory', inventoryRouter)

server.listen(port, async () => {
	console.log(`Listening at port`, port)
	Mongoose.connect(
		process.env.NODE_ENV === 'production' ? process.env.DBURL! : 'mongodb://127.0.0.1:27017/blue-heavens-erp',
		(err) => {
			if (err) return console.error('Database error:', err)
			console.log('Database connected.')
			useSocket(io)
			console.log('Socket initialized.')
		}
	)
})

export default app
