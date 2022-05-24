import IP from 'ip'
import HTTP from 'http'
import CORS from 'cors'
import DotEnv from 'dotenv'
import Express from 'express'
import ServerSocket from 'socket.io'
import Mongoose from 'mongoose'
import UserAgent from 'express-useragent'
import UserInfo from './middlewares/UserInfo'
import MainRouter from './routes/MainRouter'
import useSocket from './socket/useSocket'

DotEnv.config ()

const app: Express.Express = Express ()
const port: number | undefined = +(process.env.PORT || 28174)
const http: HTTP.Server = HTTP.createServer (app)
const io: ServerSocket.Server = new ServerSocket.Server (http) 

useSocket (io)

app.use (CORS ())
app.use (Express.json ())
app.use (Express.urlencoded ({ extended: true }))
app.use (UserAgent.express ())
app.use (UserInfo)
app.use (MainRouter)

http.listen (port, async () => {
  console.log (`Running... ${ IP.address () }:${ port }`)
  if (!process.env.DBURL)
    return console.warn ('No database url found.')
  Mongoose.connect (process.env.DBURL)
})

export default app