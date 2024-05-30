const express = require('express')
const { PrismaClient } = require('@prisma/client')
const nodemailer = require('nodemailer')
const router = express.Router()
const prisma = new PrismaClient()
prisma.$connect()
    .then(() => {
        console.log("Database Connected Successfully")
    })
    .catch((e) => {
        console.error("An error occurred connecting to the database", e);
    })
router.get('/', async (req, res, next) => {
    try {
        res.send({ message: "Api Successfully Created!" })
    } catch (error) {
        next({ status: 404, message: error.message || "Page Not Found!" })
    }

})
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

router.post('/user', async (req, res, next) => {
    const { email, message } = req.body;
    try {
        const checkUSer = await prisma.user.findUnique({ where: { email: email } })
        if (checkUSer) {
            await prisma.user.update({
                where: { email: email },
                data: {
                    message: { push: message }
                }

            })

            //send email
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: "Message Confirmation",
                text: `Thank you for sending ${message} We appreciate for you reaching out to us.Your message is safe, We shall reach out to you soon. `

            }
            const owner = {
                from: email,
                to: process.env.EMAIL_USER,
                subject: "Message received from portfolio",
                text: `${message} `

            }
            transporter.sendMail(mailOptions, owner, (error, info) => {
                if (error) {
                    console.error("An erreor ocurred", error)
                }
                else {
                    console.log("Email sent", info.response)
                }
            })
            res.json("successful")
        }
        else {
            const user = await prisma.user.create({
                data: {
                    email: email, message: [message]
                }
            })
            const owner = {
                from: email,
                to: process.env.EMAIL_USER,
                subject: "Message received from portfolio",
                text: `${message} `

            }
            //send email
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: "Message Confirmation",
                text: `Thank you for sending ${message} We appreciate for you reaching out to us.Your message is safe, We shall reach out to you soon. `
            }
            transporter.sendMail(mailOptions, owner, (error, info) => {
                if (error) {
                    console.error("An erreor ocurred", error)
                }
                else {
                    console.log("Email sent", info.response)
                }
            })
            res.json("successful")
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;