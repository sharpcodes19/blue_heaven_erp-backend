export type MessageType = 
  'onConnect' | 
  'onDisconnect'

export type ServerSocketOutgoingMessagePacketProps <T = any> = {
  message: T
  date: Date
  type: MessageType
}

export type ClientSocketIncomingMessagePacketProps <T = any> = {
  ip: string
  id: string
} & ServerSocketOutgoingMessagePacketProps