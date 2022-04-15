const mongoose = require('mongoose')

// const exerciseSchema = mongoose.Schema(
//     {
//         text: {
//             type: String,
//             required: [true, 'Please add a text value'],
//         },
//     },
//     {
//         timestamps: true,
//     }
// )

// module.exports = mongoose.model('Exercise', exerciseSchema)

const exerciseSchema = mongoose.Schema(
    {
        activityName: {
            type: String,
            minlength: [3, 'Activity name should contain at least 3 characters'],
            maxlength: [12, 'Activity name should not contain more than 12 characters']
        },
        displayName: { type: String },
        aboutMe: { type: String },
        favorite: { type: String },
        date: { type: Date },
        duration: { type: Number, min: [0, 'Duration must be greater than 0'] },
        calories: { type: Number, min: [0, 'Duration must be greater than 0'] },
        description: { type: String },
        durationGoal: { type: Number, minlength: [0, "Duration goal must be greater than 0"] },
        caloriesGoal: { type: Number, minlength: [0, "Calories goal must be greater than 0"] }
    }, {
    timestamps: true,
}
)

module.exports = mongoose.model('Exercise', exerciseSchema)