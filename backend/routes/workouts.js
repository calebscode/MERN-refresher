const express = require('express')
const router = express.Router()
const {    
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

// get all workouts
router.get('/', getAllWorkouts)

// get a single workout
router.get('/:id', getWorkout)

// post a new workout
router.post('/', createWorkout)

// delete a workout
router.delete('/:id', deleteWorkout)

// update a workout
router.patch('/:id', updateWorkout)

module.exports = router