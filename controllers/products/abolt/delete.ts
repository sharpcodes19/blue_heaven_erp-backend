import model from '../../../models/products/abolt'

const deleteAsync = async (_id: string) =>
	new Promise<void>((resolve, reject) => {
		model.findOneAndDelete({ _id }, {}, (err, doc) => {
			if (err) return reject(err)
			resolve()
		})
	})

const deleteAllAsync = async () =>
	new Promise<void>((resolve) => {
		model.deleteMany({}, resolve)
	})

export { deleteAsync, deleteAllAsync }
