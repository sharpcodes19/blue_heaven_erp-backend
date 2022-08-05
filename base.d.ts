declare module 'node-ip-details'

declare namespace Express {
	interface Request {
		visitor: VisitorProps | null
	}
}

type ResponseBaseProps<T = unknown> = {
	date: Date
	packet?: T | null
	message: string
}

type NotificationDataProps = {
	title: string
	body: string
	data: {
		data: string
	}
	trigger?: {
		seconds: number
	}
	date: Date
}

type ClientDataProps = { displayName: string; token: string; ip: string }

type ServerToClientEvents = {
	notification: (data: NotificationDataProps) => any
}

type ClientToServerEvents = {
	join: (room: string, data: ClientDataProps) => any
	notifyToAll: (room: string, data: NotificationDataProps) => any
}

type InterServerEvents = {}

type SocketData = {}

type VisitorProps = {
	city: string
	regionName: string
	regionCode: string
	countryName: string
	countryCode: string
	latitude: number
	longitude: number
	mobile: boolean
	internetProvider: string
	proxy: string
	query: string
	timezone: string
	zip: string
}

type CustomerProps = {
	name: string
	tin: string
	email: string
	contact: string
	address: string
	discount: number
	status: string
	remarks: string
}

type RawMaterialProps = {
	id: string
	name: string
	type: string
	diameter: string
	weight: number
	price: number
	quantity: number
	orderDate: Date
	deliveredDate: Date
	remarks: string
}

type FinishedProductProps = {
	id: string
	name: string
	type: string
	size: string
	threadType: string
	threadLength: string
	finishType: string
	weight: number
	length: number
	width: number
	cutLength: number
	holes: number
	holeSizes: number
	price: number
	quantity: number
	remarks: string
}
