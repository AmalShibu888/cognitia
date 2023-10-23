const mongoose = require('mongoose')

const BugSchema = new mongoose.Schema({
    "firstName" : {
        type : String,
        required : true
    },
    "lastName" : {
        type : String,
        required : true
    },
    "email" : {
        type : Array,
        required : true
    },
    "description" : {
        type : String,
        required : true
    },
    "image" : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('bug' , BugSchema)