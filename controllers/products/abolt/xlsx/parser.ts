import fs from 'fs'
import { parse } from 'csv-parse'
import Moment from 'moment'

type Delimiter = ',' | ';'

type Props = {
	fromLine: number
	toLine?: number
	delimiter: Delimiter
	path: string
}

const parser = (
	{ delimiter, fromLine, path, toLine }: Props,
	cb: (products: AnchorBoltProps) => void
) => {
	fs.createReadStream(path).pipe(
		parse({
			delimiter,
			fromLine,
			toLine
		})
			.on('data', (row) => {
				cb({
					csvSource: path,
					bend: row[4],
					diameter: row[0],
					fW: row[10],
					fWPrice: row[11],
					hexNut: row[7],
					hexNutPrice: row[8],
					lengthByInches: row[2],
					lengthByMillimeter: row[3],
					price: row[6],
					steel: row[1],
					thread: row[5],
					totalPerSet: row[13],
					cutLength: row[15],
					pcsPerLength: row[16],
					weight: row[17]
				})
			})
			.on('error', (err) => {
				console.error('Failed to read CSV file:', path)
				console.error(err.message)
			})
	)
}

export default parser
