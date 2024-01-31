
require("dotenv").config()
const express = require("express");
const app = express()
const router = require("./src/routes/Routes")
const cors = require("cors")

app.use(express.json())

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    methods: "POST"
}
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(process.env.PORT, () => console.log(`server running in http://localhost:${process.env.PORT}`))


