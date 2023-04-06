require('dotenv').config()//requires dotenv package
const express = require('express')//requires express package

//creates an express app
const app = express()



//middleware -> piece of code interating btw req on server and sending res
//global middleware -> runs on every request
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})
//local middleware -> runs on specific route

//routes
//get request handler
app.get('/',(req,res) => {
    res.json({message: 'Welcome to the APP'})
})



//listen for requests
const port = process.env.PORT
app.listen(port, () => {console.log(`Listening on port ${port}!!`)})