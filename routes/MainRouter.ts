import { Router, Request, Response } from 'express'
import Path from 'path'

const MainRouter: Router = Router ()

MainRouter.get ('/', (req: Request, res: Response) => {
  res.sendFile (Path.join (__dirname, '../index.html'))
})

export default MainRouter