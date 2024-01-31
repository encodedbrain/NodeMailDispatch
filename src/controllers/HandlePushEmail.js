"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config()



module.exports = {
    async HandlePushEmail(req, res) {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        const info = await transporter.sendMail({
            from: `${req.body.email}`,
            to: "marcodamasceno0101@outlook.com",
            subject: req.body.title,
            text: req.body.content,
            html: `
            <b>${req.body.title}</b>
            <p>${req.body.content}</p>
            `,
        });

        
        res.status(200).send(info.response);
    }
}