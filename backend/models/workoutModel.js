const mongoose = require('mongoose')
//using mongoose schema function for creating a new schema object
//Schema defines structure of documents in database - and type of document
const Schema = mongoose.Schema
//create a new mongoose Schema instance
const worksoutSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    load:{
        type:Number,
        required: true
    }
},{timestamps:true})
//timestamps -> automatically gives info about when doc was created and last updated

//Define a model -> apply the schema to particular model and use the model to interact with collection of that name
//export the model(name , schema) - model name must be singular as it will pluralize it after creating collection of that name
module.exports = mongoose.model('Workout',worksoutSchema)


