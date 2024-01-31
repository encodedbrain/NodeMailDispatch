module.exports = {
    async HandleGetHelloWorld(req, res) {

        res.status(200).send("welcome to my simple api")

    }
}