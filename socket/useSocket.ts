import ServerSocket from 'socket.io'
import onConnect from './handlers/onConnect'
import onDisconnect from './handlers/onDisconnect'

export type MessageDataProps <T> = {
  date: Date
  message: T
}

const useSocket = (io: ServerSocket.Server) => {

  io.on ('connection', onConnect)
  io.on ('disconnect', onDisconnect)

}

export default useSocket