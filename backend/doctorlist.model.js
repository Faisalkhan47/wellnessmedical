const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    doctorimage: {
        type: String,
        required: true,
    },
    doctorname: {
        type: String,
        required: true,
    },
    specialist: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    hospital: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    detail: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "DoctorDetails"
    }
});

module.exports = mongoose.model('DoctorsList', HospitalSchema);
