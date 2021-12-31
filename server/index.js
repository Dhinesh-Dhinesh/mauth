//Server

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors())
app.use(express.json())

//Mongoose----------
//*Mongose schemas

const User = require('./models/user.model');

//*-----------------

const mongoUri = 'mongodb+srv://Dhinesh:passdb@cluster0.xrjbb.mongodb.net/userInfo?retryWrites=true&w=majority'

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
})

mongoose.connection.on('error', (err) => {
    console.log('Error in MongoDB Atlas: ', err);
})

//-------------------

app.get('/', function (req, res) {
    res.send('Hi there');
})

//!Register
app.post('/reg', async (req, res) => {
    console.log(req.body);

    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })



        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error' , error: "Duplicate email"})
    }
})
//*--------------------------------
//!Login
app.post('/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if (user) {
        res.json({ status: 'ok' , user : true })
    } else {
        res.json({ status: 'error' , user : false})
    }
})
app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
})