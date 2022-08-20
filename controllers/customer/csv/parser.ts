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

const parser = ({ delimiter, fromLine, path, toLine }: Props, cb: (transaction: CustomerProps) => void) => {
	fs.createReadStream(path).pipe(
		parse({
			delimiter,
			fromLine,
			toLine
		})
			.on('data', (row) => {
				cb({
					csvSource: path,
					address: row[5],
					contact: row[6],
					discount: row[3],
					email: row[4],
					name: row[10],
					remarks: row[7],
					status: '',
					tin: row[8],
					createdAt: row[2] ? Moment(row[2]).toDate() : undefined,
					updatedAt: row[9] ? Moment(row[9]).toDate() : undefined,
					sourceId: row[0]
				})
			})
			.on('error', (err) => {
				console.error('Failed to read CSV file:', path)
				console.error(err.message)
			})
	)
}

export default parser
