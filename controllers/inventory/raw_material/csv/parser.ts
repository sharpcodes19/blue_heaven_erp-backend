import fs from 'fs'
import { parse } from 'csv-parse'
import Moment from 'moment'

type Delimiter = ','

type Props = {
	fromLine: number
	toLine?: number
	delimiter: Delimiter
	path: string
}

const parser = (
	{ delimiter, fromLine, path, toLine }: Props,
	cb: (err: Error | null, data: RawMaterialProps | null) => void
) => {
	fs.createReadStream(path).pipe(
		parse({
			delimiter,
			fromLine,
			toLine
		})
			.on('data', (row) => {
				cb(null, {
					createdAt: Moment(row[2]).toDate(),
					updatedAt: Moment(row[13]).toDate(),
					deliveredDate: row[4],
					diameter: row[8],
					id: row[0],
					name: row[9],
					orderDate: row[5],
					price: row[6],
					quantity: row[10],
					remarks: row[7],
					type: row[11],
					weight: row[12]
				})
			})
			.on('error', (err) => {
				console.error('Failed to read CSV file:', path, err.message)
				cb(err, null)
			})
	)
}

export default parser
