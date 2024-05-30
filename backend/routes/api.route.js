const express = require('express')
const { PrismaClient } = require('@prisma/client')
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
router.post('/user', async (req, res, next) => {
    const { email, message } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                email: email, message: message
            }
        })
        res.json("successful")
    } catch (error) {
        next(error)
    }
})

module.exports = router;