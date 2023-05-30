import dotenv from "dotenv"
dotenv.config()

import express from "express"
import sendEmail from "./routes/sendEmail.js"

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use('/api/v1/sendEmail', sendEmail)

app.listen(PORT, () => console.log(`App running on port ${PORT}`))