const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    beds: {
        type: String,
        required: true,
    },
    icubeds: {
        type: String,
        required: true,
    },
    airportdistance: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    detail: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "HospitalDetails"
    }
});

module.exports = mongoose.model('Hospital', HospitalSchema);
