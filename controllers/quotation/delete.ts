import model from '../../models/quotation'

const deleteAsync = async (_id: string) =>
	new Promise<void>((resolve, reject) => {
		model.findOneAndDelete({ _id }, {}, (err, doc) => {
			if (err) return reject(err)
			resolve()
		})
	})

export default deleteAsync
