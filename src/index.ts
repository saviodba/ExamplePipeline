import express, { Request, Response } from "express"

const app = express()

app.get("/", (request: Request, response: Response) => {
  response.json({
    message: "Hello word",
  })
})

app.listen(7000, () => {
  console.log("Server is online.")
})
