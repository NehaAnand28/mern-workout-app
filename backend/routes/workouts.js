const express = require('express')

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
router.post('/',(req,res) => {
    res.json({ message: 'POST a new workout' })
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