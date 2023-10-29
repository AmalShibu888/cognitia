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
        type : String,
        required : true
    },
    "file" : {
        type : String,
        required : true
    },
    "query" : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('bug' , BugSchema)