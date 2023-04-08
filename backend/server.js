require('dotenv').config()//requires dotenv package
const express = require('express')//requires express package
const mongoose = require('mongoose')//requires mongoose package
const workoutRoutes = require('./routes/workouts')
//creates an express app
const app = express()



//middleware -> piece of code interating btw req on server and sending res
//global middleware -> runs on every request
app.use(express.json()) //any req with body , parses and sends data 
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})
//local middleware -> runs on specific route

// *routes*
//get request handler
// app.get('/',(req,res) => {
//     res.json({message: 'Welcome to the APP'})
// })
//workoutRoutes are used when req made to /api/workouts
app.use('/api/workouts',workoutRoutes)

//connect to the db - asynchronous function returns a promise
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests -> only if connected to db
    const port = process.env.PORT
    app.listen(port, () => { console.log(`Connected to db & Listening on port ${port}!!`) })
})
.catch((err) => {
    console.log(err)
})

