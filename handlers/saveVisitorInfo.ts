import { Lookup } from 'geoip-lite'
import VisitorInfoModel from '../models/VisitorInfoModel'

const saveVisitorInfo = (data: Lookup | null) => {
  if (!data) {
    return console.warn ('No visitor data found.')
  }
  const entry = new VisitorInfoModel (data)
  entry.save ()
}

export default saveVisitorInfo