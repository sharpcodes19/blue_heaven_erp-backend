import IP from 'ip'
import { NextFunction, Request, Response } from 'express'
import GeoIP, { Lookup } from 'geoip-lite'
import saveVisitorInfo from '../handlers/saveVisitorInfo'

const UserInfo = (req: Request, res: Response, next: NextFunction) => {
  const geo: Lookup | null = GeoIP.lookup (IP.address ())
  saveVisitorInfo (geo)
  req.geo = geo
  next ()
}

export default UserInfo