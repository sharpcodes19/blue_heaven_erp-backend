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
	cb: (err: Error | null, data: FinishedProductProps | null) => void
) => {
	fs.createReadStream(path).pipe(
		parse({
			delimiter,
			fromLine,
			toLine
		})
			.on('data', (row) => {
				cb(null, {
					createdAt: Moment(row[3]).toDate(),
					updatedAt: Moment(row[23]).toDate(),
					csvSource: path,
					finishType: row[13],
					type: row[18],
					width: row[4],
					cutLength: isNaN(row[6]) ? 0 : row[6],
					holeQuantity: isNaN(row[8]) ? 0 : row[8],
					holeSizes: [0], // row[9],
					id: row[0],
					length: row[11],
					name: row[12],
					price: isNaN(row[5]) ? 0 : row[5],
					quantity: isNaN(row[14]) ? 0 : row[14],
					remarks: row[22],
					size: row[15],
					threadLength: row[16],
					threadType: row[17],
					weight: isNaN(row[19]) ? 0 : row[19],
					lead: row[10],
					dueDate: row[7],
					orderItemId: row[20],
					quotationId: row[21]
				})
			})
			.on('error', (err) => {
				console.error('Failed to read CSV file:', path, err.message)
				cb(err, null)
			})
	)
}

export default parser
