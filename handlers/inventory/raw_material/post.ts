import { Request, Response } from 'express'
import { ObjectId } from 'mongoose'
import {
	findAsync,
	RawMaterialFindKeywords
} from '../../../controllers/inventory/raw_material/get'
import postCallback from '../../../controllers/inventory/raw_material/post'
import putCallback from '../../../controllers/inventory/raw_material/put'

const addOne = async (
	req: Request<{}, {}, RawMaterialProps>,
	res: Response<ResponseBaseProps>
) => {
	if (!req.body || !req.body.name)
		return res.status(400).send({
			date: new Date(),
			message: 'No data found.'
		})

	postCallback(req.body, (err, result) => {
		if (err)
			return res.status(403).send({
				date: new Date(),
				message: `A problem has been detected while saving your data: ${err.message}`
			})
		res.status(201).send({
			date: new Date(),
			message: 'Raw Material successfully added.'
		})
	})
}

const minusQuantity = async (
	req: Request<{}, {}, RawMaterialFindKeywords & { amount: number }>,
	res: Response<ResponseBaseProps<RawMaterialProps>>
) => {
	const { amount, name, _id, diameter, type, weight } = req.body
	console.log(req.body)

	if (!req.body)
		return res.status(400).send({
			date: new Date(),
			message: 'No data found.'
		})

	const targetMaterials = await findAsync({ name, _id, diameter, type, weight })
	if (!targetMaterials || !targetMaterials.length)
		return res.status(204).send({
			date: new Date(),
			message: 'Cannot find raw material'
		})

	const material: RawMaterialProps & { _id?: string } = targetMaterials[0]
	putCallback(
		material._id!,
		{
			quantity: (material.quantity || 0) - amount
		},
		(err, packet) => {
			if (err)
				return res.status(403).send({
					date: new Date(),
					message: `A problem has been detected while saving your data: ${err.message}`
				})
			res.send({
				date: new Date(),
				message: 'Raw material successfully updated.',
				packet: packet
			})
		}
	)
}

export { addOne, minusQuantity }
