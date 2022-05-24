import { Socket } from 'socket.io'

const onConnect = (client: Socket) => {
  console.log ('Client connected: ', client.id)
  client.to (client.id).emit (JSON.stringify ({
    date: new Date (),
    message: 'Welcome. You are now connected.'
  }))
}

export default onConnect