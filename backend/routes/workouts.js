const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()

//this is triggered when req is made to /api/workouts/
//GET all workouts
router.get('/',(req,res) => {
    res.json({ message: 'GET all workouts'})
})

//GET a single workout
router.get('/:id',(req,res) => {
    res.json({ message: 'GET a single workout' })
})

//POST a new workout
router.post('/',async(req,res) => {
    const {title,load,reps} = req.body
    try{
        //.create() is asynchronous -> use async & await -> response object with id stored in workout
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'DELETE a workout' })
})

//UPDATE a new workout
router.patch('/:id', (req, res) => {
    res.json({ message: 'UPDATE a new workout' })
})

module.exports = router