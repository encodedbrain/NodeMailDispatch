
require("dotenv").config()
const express = require("express");
const app = express()
const router = require("./src/routes/Routes")
const cors = require("cors")

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173/email"
}))
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(process.env.PORT, () => console.log(`server running in http://localhost:${process.env.PORT}`))


