const method = require("../controllers/HandleGet")
const email = require("../controllers/HandlePushEmail")
const Express = require("express")
const HTTP = Express.Router()


HTTP.get("/", method.HandleGetHelloWorld)
HTTP.post("/email", email.HandlePushEmail)



module.exports = HTTP