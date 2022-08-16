import { Request, Response } from 'express'
import deleteAsync from '../../../controllers/inventory/raw_material/delete'

type Params = {
	_id: string
}

const deleteById = async (req: Request<Params>, res: Response<ResponseBaseProps>) => {
	const { _id } = req.params
	if (!_id)
		return res.status(400).send({
			date: new Date(),
			message: 'Cannot determine which raw material to delete.'
		})

	try {
		await deleteAsync(_id)
		res.send({
			date: new Date(),
			message: 'Raw material successfully deleted.'
		})
	} catch (err) {
		console.warn(`Raw material deletion failed. Raw material ID: ${_id} from `, req.visitor!.city)
		res.status(404).send({
			date: new Date(),
			message: 'Raw material was not found on our record.'
		})
	}
}

export default deleteById
