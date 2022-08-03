import Multer from 'multer'
import Path from 'path'
import { v4 } from 'uuid'

const uploadFiles = (fieldName: string, destination: string) => {
	const storage = Multer.diskStorage({
		destination,
		filename: (req, file, cb) => {
			const filename: string = `${v4()}${Path.extname(file.originalname)}`
			cb(null, filename)
		}
	})
	return Multer({ storage }).array(fieldName)
}

export default uploadFiles
