import HTTP from 'http'
import cors from 'cors'
import dotEnv from 'dotenv'
import express, { Express } from 'express'
import Mongoose from 'mongoose'
import { Server } from 'socket.io'
// import rootRouter from './routers/root'
import useSocket from './socket'
import orderRouter from './routers/order'
import userRouter from './routers/user'
import customerRouter from './routers/customer'
import quotationRouter from './routers/quotation'
import inventoryRouter from './routers/inventory'
import productRouter from './routers/products'
import visitorInfo from './middlewares/visitor_info'

dotEnv.config()

const app: Express = express()
const port: number | undefined = +(process.env.PORT || 28174)
const server: HTTP.Server = HTTP.createServer(app)
const io = new Server<
	ServerToClientEvents,
	ClientToServerEvents,
	InterServerEvents,
	SocketData
>(server, {
	cors: {
		origin: '*'
	}
})

app.use(
	cors({
		origin: '*'
		// allowedHeaders: [
		// 	'X-CSRF-Token',
		// 	'X-Requested-With',
		// 	'Accept',
		// 	'Accept-Version',
		// 	'Content-Length',
		// 	'Content-MD5',
		// 	'Content-Type',
		// 	'Date',
		// 	'X-Api-Version'
		// ],
		// methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
		// credentials: true
	})
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(process.env.PUBLIC_FOLDER_PATH!))

// routes
// app.use('/', visitorInfo, rootRouter)
app.use('/customer', customerRouter)
app.use('/inventory', inventoryRouter)
app.use('/order', orderRouter)
app.use('/user', userRouter)
app.use('/quotation', quotationRouter)
app.use('/product', productRouter)

server.listen(port, async () => {
	console.log(`Listening at port`, port, process.env.NODE_ENV)
	Mongoose.connect(
		process.env.NODE_ENV !== 'production'
			? 'mongodb://localhost:27017/blue-heavens-erp'
			: process.env.DBURL!,
		(err) => {
			if (err) return console.error('Database error:', err)
			console.log('Database connected.')
			useSocket(io)
			console.log('Socket initialized.')
		}
	)
})

export default app
