const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventSchema = new Schema({
    "eventId" : {
        type : String,
        required : true
    },
    "bannerImages" : {
        type : String,
        required : true
    },
    "Images" : {
        type : Array,
        required : true
    },
    "ShortDescription" : {
        type : String,
        required : true
    },
    "description" : {
        type : String,
        required : true
    },
    "eligibility" : {
        type : String,
        required : true
    },
    "rules" : {
        type : Array,
        required : true
    },
    "eventName" : {
        type : String,
        required : true
    },
    "eventDate" : {
        type : String,
        required : true
    },
    "eventTime" : {
        type : String,
        required : true
    },
    "venue" : {
        type : String,
        required : true
    },
    "team" : {
        type : Array,
        required : true
    },
    "registrationsCount" : {
        type : Number,
        required : true
    },
    "form" : {
        type : String,
        required : true
    },
    "department" : {
        type : String,
        required : true

    }
}, {timestamps :true})

module.export = mongoose.model('event' , EventSchema);