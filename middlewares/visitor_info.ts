import { NextFunction, Request, Response } from 'express'
import Details from 'node-ip-details'
import axios from 'axios'

type IPifyResponse = {
	ip: string
}

const visitorInfo = async (req: Request, res: Response, next: NextFunction) => {
	const response = await axios.get<IPifyResponse>('https://api.ipify.org?format=json')
	const details = await Details.initialise({ ip: response.data.ip })
	const data = await details.allInformation()
	req.visitor = data
	next()
}

export default visitorInfo
