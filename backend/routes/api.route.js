const express = require('express');
const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');
const router = express.Router();
const prisma = new PrismaClient();

prisma.$connect()
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch((e) => {
        console.error("An error occurred connecting to the database", e);
    });

router.get('/', async (req, res, next) => {
    try {
        res.send({ message: "Api Successfully Created!" });
    } catch (error) {
        next({ status: 404, message: error.message || "Page Not Found!" });
    }
});

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
        const checkUser = await prisma.user.findUnique({ where: { email } });
        if (checkUser) {
            await prisma.user.update({
                where: { email },
                data: {
                    message: { push: message }
                }
            });
        } else {
            await prisma.user.create({
                data: {
                    email,
                    message: [message]
                }
            });
        }

        // Send confirmation email to user
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Message Confirmation",
            text: `Thank you for sending ${message}. We appreciate you reaching out to us. Your message is safe, and we shall reach out to you soon.`
        };

        // Send email notification to owner
        const ownerMailOptions = {
            from: email,  // Use the sender's email here
            to: process.env.EMAIL_USER,
            subject: "Message received from portfolio",
            text: `You have received a new message from ${email}: ${message}`
        };

        transporter.sendMail(userMailOptions, (error, info) => {
            if (error) {
                console.error("An error occurred while sending confirmation email", error);
            } else {
                console.log("Confirmation email sent", info.response);
            }
        });

        transporter.sendMail(ownerMailOptions, (error, info) => {
            if (error) {
                console.error("An error occurred while sending notification email", error);
            } else {
                console.log("Notification email sent", info.response);
            }
        });

        res.json("successful");
    } catch (error) {
        next(error);
    }
});

module.exports = router;
