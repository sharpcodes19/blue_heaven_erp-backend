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
					bend: row[4].trim(),
					diameter: row[0].trim(),
					fW: row[10].trim(),
					fWPrice: row[11].trim(),
					hexNut: row[7].trim(),
					hexNutPrice: row[8].trim(),
					lengthByInches: row[2].trim(),
					lengthByMillimeter: row[3].trim(),
					price: row[6].trim(),
					steel: row[1].trim(),
					thread: row[5].trim(),
					totalPerSet: row[13].trim(),
					cutLength: row[15].trim(),
					pcsPerLength: row[16].trim(),
					weight: row[17].trim()
				})
			})
			.on('error', (err) => {
				console.error('Failed to read CSV file:', path)
				console.error(err.message)
			})
	)
}

export default parser
