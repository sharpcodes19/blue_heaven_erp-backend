import { Socket } from 'socket.io'

const onDisconnect = (client: Socket) => {
  console.log ('Client disconnected: ', client.id)
}

export default onDisconnect