require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')

// create express app
const app = express()
const PORT = process.env.PORT

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// route handler
app.use('/api/workouts', workoutRoutes)

// listen for requests
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})