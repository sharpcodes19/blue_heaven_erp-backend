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
	csvSource?: string
	updatedAt?: Date
	createdAt?: Date
	orders?: Array<string>
	sourceId?: string
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
	createdAt?: Date
	updatedAt?: Date
}

type FinishedProductProps = {
	_id?: string
	name: string
	type: string
	size: string
	threadType: string
	threadLength: Array<String>
	finishType: string
	weight: number
	length: string
	width: string
	cutLength: number
	holeQuantity: number
	holeSizes: Array<number>
	price: number
	quantity: number
	remarks: string
	lead: string
	createdAt?: Date
	updatedAt?: Date
	csvSource?: string
	dueDate: string
	orderItemId: string
	quotationId: string
}

type QuotationProps = {
	_id?: string
	items?: Array<FinishedProductProps>
	label: string
	customerId: string
	timeLead?: number
	updatedAt?: Date
	createdAt?: Date
}

type OrderProps = {
	_id?: string
	// quotationId: string
	orderDate?: Date
	items: Array<FinishedProductProps>
	dueDate?: string
	status?: Array<string>
	totalCost?: number
	amountPaid?: number
	paymentMethod?: string
	paymentDate?: string
	ewtAmount?: number
	balancePayment?: Array<{
		amount: number
		paymentMethod?: string
		paymentDate?: string
	}>
	remarks?: string
	deliveryDate?: string
	shippingFee?: number
	deliveryLocation?: string
	invoiceNumber?: string
	customerId?: string
	createdAt?: Date
	updatedAt?: Date
}

type UserProps = {
	username: string
	password: string
	createdAt?: Date
	updatedAt?: Date
}

type AnchorBoltProps = {
	diameter?: string
	steel?: string
	lengthByInches?: string
	lengthByMillimeter?: string
	bend?: string
	thread?: string
	price?: string
	hexNut?: string
	hexNutPrice?: string
	hexNutQuantity?: string
	fW?: string
	fWPrice?: string
	fWQuantity?: string
	totalPerSet?: string
	totalPrice?: string
	csvSource?: string
}
