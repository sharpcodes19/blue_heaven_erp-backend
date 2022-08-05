import { Request, Response } from 'express'
import postCallback from '../../../controllers/inventory/raw_material/post'

const addRawMaterialAsync = async (req: Request<{}, {}, RawMaterialProps>, res: Response<ResponseBaseProps>) => {
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
		res.send({
			date: new Date(),
			message: 'Raw Material successfully added.'
		})
	})
}

export default addRawMaterialAsync
