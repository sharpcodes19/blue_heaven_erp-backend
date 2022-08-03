import { Server } from 'socket.io'

const useSocket = (io: Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>) => {
	io.on('connection', (socket) => {
		console.log(`A socket has been connected. Socket ID:`, socket.id)
		socket.on('join', (room, client) => {
			socket.join(room)
			console.log(`${client.displayName} (${socket.id}/${client.ip}) joined ${room} with token:`, client.token)
		})

		socket.on('notifyToAll', (room, data) => {
			socket.to(room).emit('notification', data)
			console.log('Notification has been emitted to room:', room, data)
		})

		socket.on('disconnect', () => {
			console.log(`${socket.id} has been disconnected.`)
		})
	})
}

export default useSocket
