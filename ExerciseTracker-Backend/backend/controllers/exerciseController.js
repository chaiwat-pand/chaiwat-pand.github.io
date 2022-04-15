const asyncHandler = require('express-async-handler')

const Exercise = require('../models/exerciseModel')

// @desc    Get exercises
// @route   GET /api/exercises
// @access Private
const getExercises = asyncHandler(async (req, res) => {
    const exercises = await Exercise.find()
    res.status(200).json(exercises)
})

// @desc    Set exercise
// @route   SET /api/exercises
// @access Private
const setExercise = asyncHandler(async (req, res) => {
    if (!(req.body.activityName &&
        req.body.displayName &&
        req.body.aboutMe &&
        req.body.favorite &&
        req.body.date &&
        req.body.duration &&
        req.body.calories &&
        req.body.description &&
        req.body.durationGoal &&
        req.body.caloriesGoal)) {
        res.status(400)
        throw new Error('Please fill out every single box')
    }

    const exercise = await Exercise.create({
        activityName: req.body.activityName,
        displayName: req.body.displayName,
        aboutMe: req.body.aboutMe,
        favorite: req.body.favorite,
        date: req.body.date,
        duration: req.body.duration,
        calories: req.body.calories,
        description: req.body.description,
        durationGoal: req.body.durationGoal,
        caloriesGoal: req.body.caloriesGoal
    })

    res.status(200).json(exercise)
    console.log(req.body)

})

// @desc    Update exercise
// @route   PUT /api/exercises/:id
// @access Private
const updateExercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)

    if (!exercise) {
        res.status(400)
        throw new Error('Exercise not found')
    }

    const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedExercise)
})

// @desc    Delete goal
// @route   DELETE /api/exercises/:id
// @access Private
const deleteExercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)

    if (!exercise) {
        res.status(400)
        throw new Error('Exercise not found')
    }

    await exercise.remove()

    res.status(200).json({ id: req.params.id })

})

module.exports = {
    getExercises,
    setExercise,
    updateExercise,
    deleteExercise
}