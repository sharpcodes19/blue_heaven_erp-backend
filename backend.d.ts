import GeoIP from 'geoip-lite'

declare global {
  declare namespace Express {
    export interface Request {
      geo: GeoIP.Lookup | null
    }
  }
}