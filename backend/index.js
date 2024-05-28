const express = require('express')
require('dotenv').config()
const morgan = require('morgan');
const cors = require('cors')
const app = express()
const corsOptions = {
    origin: ['http://localhost:5173'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionSuccessStatus: 200
};

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors(corsOptions));

app.use('/api', require('./routes/api.route'))

app.get('/', async (req, res, next) => {
    res.json({
        message: "Server Is running Here!"
    })
})

const Port = process.env.PORT || 3001

app.listen(Port, () => console.log(`App running at port ${Port}`))


