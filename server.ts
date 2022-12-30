
import express from 'express'

import { Router, Request, Response } from 'express';

const app = express()
const port = 3000

app.get('/', (request:Request, response:Response) => {
  response.json({Nome:"Kaio"})
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
