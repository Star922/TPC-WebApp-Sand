const mongoose = require('mongoose');

const driveSchema = new mongoose.Schema({
    postNo: {
        type: Number,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        default: "Hidden",
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    tier: {
        type: String,
        trim: true,
        required: true,
    },
    salary : {
        type: String,
        trim: true,
        required: true,
    },
    designation : {
        type: String,
        trime: true,
    },
    eligibleBranch: [
        {
            type: String,
            trim: true,
        }
    ],
    backlogsAllowed: {
        type: String,
        default: "Yes"
    },
    cgpaRequired: {
        type: String,
        default: "0"
    },
    _10thPercentRequired : {
        type: String,
        default: "0"
    },
    _12thPercentRequired : {
        type: String,
        default: "0"
    },
    jobLocation: {
        type: String,
        required: true,
    },
    bond: {
        type: String,
        default: "No"
    },
    applyBefore: {
        type: Date,
        trim: true, 
        required: true,
    }

},{timestamps: true})

module.exports = mongoose.model("Drive", driveSchema);