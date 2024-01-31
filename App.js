
require("dotenv").config()
const express = require("express");
const app = express()
const router = require("./src/routes/Routes")
const cors = require("cors")

app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(process.env.PORT, () => console.log(`server running in http://localhost:${process.env.PORT}`))


