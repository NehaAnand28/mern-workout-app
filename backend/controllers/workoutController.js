const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//GET all workouts
const getAllWorkouts = async (req, res) => {
    //gets all workout in array
    const workouts = await Workout.find({}).sort({createdAt: -1})//decending order -> newest at top
    res.status(200).json(workouts)
}

//GET a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params
    //if not a valid object id, return 404 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }
    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({error:'No such workout'})
    }

    res.status(200).json(workout)
}

//POST a new workout
const createWorkout = async(req,res) => {
    const { title, load, reps } = req.body
    //add doc to db 
    try {
        //.create() is asynchronous -> use async & await -> response object with id stored in workout
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

//DELETE a workout
const deleteWorkout = async(req, res) => { 
    const { id } = req.params
    //if not a valid object id, return 404 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if (!workout) {
        return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}

//UPDATE a new workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    //if not a valid object id, return 404 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id },{
        ...req.body
    })
    if (!workout) {
        return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}