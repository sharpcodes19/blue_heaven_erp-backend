import { Request, Response } from 'express'
import deleteAsync from '../../controllers/customer/delete'

type Params = {
	_id: string
}

const deleteById = async (req: Request<Params>, res: Response<ResponseBaseProps>) => {
	const { _id } = req.params
	if (!_id)
		return res.status(400).send({
			date: new Date(),
			message: 'Cannot determine which customer to delete.'
		})

	try {
		await deleteAsync(_id)
		res.send({
			date: new Date(),
			message: 'Customer successfully deleted.'
		})
	} catch (err) {
		console.warn(`Customer deletion failed. Customer ID: ${_id} from `, req.visitor!.city)
		res.status(404).send({
			date: new Date(),
			message: 'Customer was not found on our record.'
		})
	}
}

export default deleteById
