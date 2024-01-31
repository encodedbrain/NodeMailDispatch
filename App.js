
require("dotenv").config()
const express = require("express");
const app = express()
const router = require("./src/routes/Routes")
const cors = require("cors")

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(router)

