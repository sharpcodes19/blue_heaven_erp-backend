import { Request, Response } from 'express'
import {
	deleteAsync,
	deleteAllAsync
} from '../../../controllers/products/abolt/delete'

type Params = {
	_id: string
}

const deleteById = async (
	req: Request<Params>,
	res: Response<ResponseBaseProps>
) => {
	const { _id } = req.params
	if (!_id)
		return res.status(400).send({
			date: new Date(),
			message: 'Cannot determine which product to delete.'
		})

	try {
		await deleteAsync(_id)
		res.send({
			date: new Date(),
			message: 'Product successfully deleted.'
		})
	} catch (err) {
		console.warn(
			`Product deletion failed. Product ID: ${_id} from `,
			req.visitor!.city
		)
		res.status(404).send({
			date: new Date(),
			message: 'Product was not found on our record.'
		})
	}
}

const deleteAll = async (
	req: Request<Params>,
	res: Response<ResponseBaseProps>
) => {
	try {
		await deleteAllAsync()
		res.send({
			date: new Date(),
			message: 'Product successfully deleted.'
		})
	} catch (err) {
		console.warn('Product deletion of all records failed.', req.visitor!.city)
		res.status(404).send({
			date: new Date(),
			message: 'Product deletion of all records failed.'
		})
	}
}

export { deleteById, deleteAll }
