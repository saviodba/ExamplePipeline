import express, { Request, Response } from "express"

const app = express()

app.get("/", (request: Request, response: Response) => {
  response.json({
    message: "Olá Mundo!",
  })
})

app.listen(7000, () => {
  console.log("Server is online. In Port 7000")
})
