require('dotenv').config()
const express = require('express')

// create express app
const app = express()
const PORT = process.env.PORT

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// route handler
app.get('/', (req, res) => {
    res.json({msg: 'welcome to the app'})
})

// listen for requests
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})