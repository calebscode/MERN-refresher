const mongoose = require('mongoose')
const Schema = mongoose.Schema

// a Schema defines the structure of a document
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true})

// here we create the actual usable model to interact with the Workouts collection
module.exports = mongoose.model('Workout', workoutSchema)