import fs from 'fs'
import { parse } from 'csv-parse'
import Moment from 'moment'
import finishedProductModel from '../../../models/inventory/finished_product'
import customerModel from '../../../models/customer'

type Delimiter = ','

type Props = {
	fromLine: number
	toLine?: number
	delimiter: Delimiter
	path: string
}

const parser = (
	{ delimiter, fromLine, path, toLine }: Props,
	cb: (err: Error | null, data: OrderProps | null) => void
) => {
	fs.createReadStream(path).pipe(
		parse({
			delimiter,
			fromLine,
			toLine
		})
			.on('data', async (row) => {
				const customerId = row[11]
				const id = row[0]
				const customer = await customerModel.findOne({ sourceId: customerId }).exec()
				const items = await finishedProductModel.find({ orderItemId: id }).exec()
				const status = JSON.parse(row[16])

				if (customer?.id) {
					cb(null, {
						createdAt: row[2] ? Moment(row[3]).toDate() : undefined,
						updatedAt: row[9] ? Moment(row[17]).toDate() : undefined,
						customer,
						delivery: {
							address: row[6],
							date: row[5],
							remarks: row[15]
						},
						invoiceNumber: row[10],
						items,
						payment: {
							amount: row[12],
							balance: row[2].replaceAll("'", '').trim(),
							cost: row[9],
							date: row[13],
							ewt: row[7],
							freightCost: row[9],
							mode: row[14]
						},
						status: status.filter((item: any) => item['S']).map((item: any) => item.S) || []
					})
				}
			})
			.on('error', (err) => {
				console.error('Failed to read CSV file:', path)
				console.error(err.message)
				cb(err, null)
			})
	)
}

export default parser
