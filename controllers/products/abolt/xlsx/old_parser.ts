import * as XLSX from 'xlsx'
import fs from 'fs'

const parser = (path: string, sheetName?: string): Array<AnchorBoltProps> => {
	const buf = fs.readFileSync(path)
	const wb = XLSX.read(buf)

	const products: Array<AnchorBoltProps> = []
	let sheetNames = sheetName ? [sheetName] : wb.SheetNames
	sheetNames.forEach((name) => {
		const ws = wb.Sheets[name]
		const data = XLSX.utils.sheet_to_json(ws)
		let row = 0
		for (const json of data) {
			if (row > 0) {
				const values = Object.values<string>(json as any)
				const product = {
					bend: values[5],
					diameter: values[1],
					fW: values[0],
					fWPrice: values[10],
					hexNut: values[8],
					hexNutPrice: values[9],
					lengthByInches: values[3],
					lengthByMillimeter: values[4],
					price: values[7],
					steel: values[2],
					thread: values[6],
					totalPerSet: values[11],
					xlsxSrc: path,
					sheet: name
				}
				products.push(product)
				break
			}
			row += 1
		}
	})
	return products
}

export default parser
