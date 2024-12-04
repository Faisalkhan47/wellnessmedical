const mongoose = require('mongoose');

const HospitaldetailsSchema = new mongoose.Schema({
    image1: {
        type: String,
        required: true,
    },
    image2: {
        type: String,
        required: true,
    },
    image3: {
        type: String,
        required: true,
    },
    image4: {
        type: String,
        required: true,
    },
    hospitalname: {
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
    about1: {
        type: String,
        required: true,
    },
    about2: {
        type: String,
        required: true,
    },
    about3: {
        type: String,
        required: true,
    },
    about4: {
        type: String,
        required: true,
    },
    about5: {
        type: String,
        required: true,
    },
    about6: {
        type: String,
        required: true,
    },
    about7: {
        type: String,
        required: true,
    },
    about8: {
        type: String,
        required: true,
    },
    locationandaddress1: {
        type: String,
        required: true,
    },
    locationandaddress2: {
        type: String,
        required: true,
    },
    locationandaddress3: {
        type: String,
        required: true,
    },
    locationandaddress4: {
        type: String,
        required: true,
    },
    locationandaddress5: {
        type: String,
        required: true,
    },
    locationandaddress6: {
        type: String,
        required: true,
    },
    locationandaddress7: {
        type: String,
        required: true,
    },
    locationandaddress8: {
        type: String,
        required: true,
    },
    doctor1: {
        type: String,
        required: true,
    },
    doctor2: {
        type: String,
        required: true,
    },
    doctor3: {
        type: String,
        required: true,
    },
    doctor4: {
        type: String,
        required: true,
    },
    doctor5: {
        type: String,
        required: true,
    },
    doctor6: {
        type: String,
        required: true,
    },
    doctor7: {
        type: String,
        required: true,
    },
    doctor8: {
        type: String,
        required: true,
    },
    doctor9: {
        type: String,
        required: true,
    },
    doctor10: {
        type: String,
        required: true,
    },
    doctor11: {
        type: String,
        required: true,
    },
    doctor12: {
        type: String,
        required: true,
    },
    doctorimage1: {
        type: String,
        required: true,
    },
    doctorimage2: {
        type: String,
        required: true,
    },
    doctorimage3: {
        type: String,
        required: true,
    },
    doctorimage4: {
        type: String,
        required: true,
    },
    doctorimage5: {
        type: String,
        required: true,
    },
    doctorimage6: {
        type: String,
        required: true,
    },
    doctorimage7: {
        type: String,
        required: true,
    },
    doctorimage8: {
        type: String,
        required: true,
    },
    doctorimage9: {
        type: String,
        required: true,
    },
    doctorimage10: {
        type: String,
        required: true,
    },
    doctorimage11: {
        type: String,
        required: true,
    },
    doctorimage12: {
        type: String,
        required: true,
    },
    doctorexp1: {
        type: String,
        required: true,
    },
    doctorexp2: {
        type: String,
        required: true,
    },
    doctorexp3: {
        type: String,
        required: true,
    },
    doctorexp4: {
        type: String,
        required: true,
    },
    doctorexp5: {
        type: String,
        required: true,
    },
    doctorexp6: {
        type: String,
        required: true,
    },
    doctorexp7: {
        type: String,
        required: true,
    },
    doctorexp8: {
        type: String,
        required: true,
    },
    doctorexp9: {
        type: String,
        required: true,
    },
    doctorexp10: {
        type: String,
        required: true,
    },
    doctorexp11: {
        type: String,
        required: true,
    },
    doctorexp12: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('HospitalDetails', HospitaldetailsSchema);
