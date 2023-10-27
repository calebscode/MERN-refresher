const { default: mongoose } = require('mongoose')
const Workout = require('../models/workoutModel')

// GET all workouts
const getAllWorkouts = async (req, res) => {
    // grab all workouts, sort by latest
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// GET a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : "No such workout."})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({ error : 'No such workout.' })
    }

    res.status(200).json(workout)
}

// CREATE a new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    // add doc to db
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400)
        res.json({ error: error.message })
    }
}

// DELETE a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : "No such workout."})
    }

    const workout = await Workout.findByIdAndDelete(id)

    if (!workout) {
        return res.status(404).json({ error : 'No such workout.' })
    }

    res.status(200).json(workout)
}

// UPDATE a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : "No such workout."})
    }

    const workout = await Workout.findOneAndUpdate({_id : id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({ error : 'No such workout.' })
    }

    res.status(200).json(workout)
}

// export the functions to be usable by our routes
module.exports = {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}