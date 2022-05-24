import Mongoose from 'mongoose'
import { Lookup } from 'geoip-lite'

const schema = new Mongoose.Schema <Lookup> ({
  /** [ <low bound of IP block>, <high bound of IP block> ] */
  range: {
    type: [Number, Number],
    required: true,
  },
  /** 2 letter ISO-3166-1 country code https://www.iban.com/country-codes */
  country: {
    type: String,
    max: 2,
    required: true
  },
  /**
   * Up to 3 alphanumeric variable length characters as ISO 3166-2 code
   * For US states this is the 2 letter state
   * For the United Kingdom this could be ENG as a country like “England
   * FIPS 10-4 subcountry code
   */
  region: {
    type: String,
    max: 3,
    required: true,
    default: 'PH'
  },
  /** 1 if the country is a member state of the European Union, 0 otherwise. */
  eu: {
    type: String,
    max: 1,
    default: '0',
    required: true
  },
  /** "Country/Zone" Timezone from IANA Time Zone Database */
  timezone: {
    type: String,
    required: true
  },
  /** This is the full city name */
  city: {
    type: String,
    required: true
  },
  /** The latitude and longitude of the city */
  ll: {
    type: [Number, Number],
    required: true
  },
  /** Metro code */
  metro: {
    type: Number,
    required: true
  },
  /** The approximate accuracy radius (km), around the latitude and longitude */
  area: {
    type: Number,
    required: true
  }
})

export default Mongoose.model ('visitorInfo', schema)