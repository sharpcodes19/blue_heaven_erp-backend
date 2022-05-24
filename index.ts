import IP from 'ip'
import HTTP from 'http'
import CORS from 'cors'
import WebSocket from 'ws'
import DotEnv from 'dotenv'
import Express from 'express'
import Mongoose from 'mongoose'
import UserAgent from 'express-useragent'
import UserInfo from './middlewares/UserInfo'
import MainRouter from './routes/MainRouter'
import { ServerSocketOutgoingMessagePacketProps } from './socket/Serializer'

DotEnv.config ()

const app: Express.Express = Express ()
const port: number | undefined = +(process.env.PORT || 28174)
const server: HTTP.Server = HTTP.createServer (app)
const wss: WebSocket.Server = new WebSocket.Server ({ server })

app.use (CORS ())
app.use (Express.json ())
app.use (Express.urlencoded ({ extended: true }))
app.use (UserAgent.express ())
app.use (UserInfo)
app.use (MainRouter)

server.listen (port, async () => {

  wss.on ('connection', (ws: WebSocket) => {

    ws.send (JSON.stringify ({
      date: new Date (),
      message: 'Welcome to Sharpcodes Backend',
      type: 'onConnect'
    } as ServerSocketOutgoingMessagePacketProps <string>))

  })

  console.log (`Running... ${ IP.address () }:${ port }`)
  if (!process.env.DBURL)
    return console.warn ('No database url found.')

  Mongoose.connect (process.env.DBURL, (err) => {
    if (err)
      return console.error ('Database error:', err)
    console.log ('Database connected.')
  })
})

export default app