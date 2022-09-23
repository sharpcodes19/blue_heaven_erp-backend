import { Request, Response } from 'express'
import deleteAsync from '../../controllers/quotation/delete'

type Params = {
	_id: string
}

const deleteById = async (req: Request<Params>, res: Response<ResponseBaseProps>) => {
	const { _id } = req.params
	if (!_id)
		return res.status(400).send({
			date: new Date(),
			message: 'Cannot determine which quotation to delete.'
		})

	try {
		await deleteAsync(_id)
		res.send({
			date: new Date(),
			message: 'Quotation successfully deleted.'
		})
	} catch (err) {
		console.warn(`Quotation deletion failed. Quotation ID: ${_id} from `, req.visitor!.city)
		res.status(404).send({
			date: new Date(),
			message: 'Quotation was not found on our record.'
		})
	}
}

export default deleteById
