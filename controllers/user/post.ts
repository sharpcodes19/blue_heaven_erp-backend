import { Callback } from 'mongoose'
import model from '../../models/user'

const postCallback = (data: UserProps, cb: Callback<UserProps>) => new model(data).save(cb)

export default postCallback
