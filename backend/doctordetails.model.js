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
    doctorname2: {
        type: String,
        required: true,
    },
    aboutdoctor1: {
        type: String,
        required: true,
    },
    aboutdoctor2: {
        type: String,
        required: true,
    },
    aboutdoctor3: {
        type: String,
        required: true,
    },
    aboutdoctor4: {
        type: String,
        required: true,
    },
    aboutdoctor5: {
        type: String,
        required: true,
    },
    aboutdoctor6: {
        type: String,
        required: true,
    },
    aboutdoctor7: {
        type: String,
        required: true,
    },
    specialityint1: {
        type: String,
        required: true,
    },
    specialityint2: {
        type: String,
        required: true,
    },
    specialityint3: {
        type: String,
        required: true,
    },
    specialityint4: {
        type: String,
        required: true,
    },
    specialityint5: {
        type: String,
        required: true,
    },
    specialityint6: {
        type: String,
        required: true,
    },
    specialityint7: {
        type: String,
        required: true,
    },
    treatmentlist1: {
        type: String,
        required: true,
    },
    treatmentlist2: {
        type: String,
        required: true,
    },
    treatmentlist3: {
        type: String,
        required: true,
    },
    treatmentlist4 : {
        type: String,
        required: true,
    },
    treatmentlist5: {
        type: String,
        required: true,
    },
    treatmentlist6: {
        type: String,
        required: true,
    },
    treatmentlist7: {
        type: String,
        required: true,
    },
    treatmentlist8: {
        type: String,
        required: true,
    },
    treatmentlist9: {
        type: String,
        required: true,
    },
    treatmentlist10: {
        type: String,
        required: true,
    },
    treatmentlist11: {
        type: String,
        required: true,
    },
    treatmentlist12: {
        type: String,
        required: true,
    },
    treatmentlist13: {
        type: String,
        required: true,
    },
    treatmentlist14: {
        type: String,
        required: true,
    },
    treatmentlist15: {
        type: String,
        required: true,
    },
    treatmentlist16: {
        type: String,
        required: true,
    },
    treatmentlist17: {
        type: String,
        required: true,
    },
    treatmentlist18: {
        type: String,
        required: true,
    },
    treatmentlist19: {
        type: String,
        required: true,
    },

    treatmentlist20: {
        type: String,
        required: true,
    },
    treatmentlist21: {
        type: String,
        required: true,
    },
    treatmentlist22: {
        type: String,
        required: true,
    },
    treatmentlist23: {
        type: String,
        required: true,
    },
    treatmentlist24: {
        type: String,
        required: true,
    },
    treatmentlist25: {
        type: String,
        required: true,
    },
    treatmentlist26: {
        type: String,
        required: true,
    },
    treatmentlist27: {
        type: String,
        required: true,
    },
    treatmentlist28: {
        type: String,
        required: true,
    },
    treatmentlist29: {
        type: String,
        required: true,
    },
    treatmentlist30: {
        type: String,
        required: true,
    },
    workexp1: {
        type: String,
        required: true,
    },
    workexp2: {
        type: String,
        required: true,
    },
    workexp3: {
        type: String,
        required: true,
    },
    professionalmemberships1: {
        type: String,
        required: true,
    },
    professionalmemberships2: {
        type: String,
        required: true,
    },
    professionalmemberships3: {
        type: String,
        required: true,
    },
    professionalmemberships4: {
        type: String,
        required: true,
    },
    professionalmemberships5: {
        type: String,
        required: true,
    },
    professionalmemberships6: {
        type: String,
        required: true,
    },
    professionalmemberships7: {
        type: String,
        required: true,
    },
    awardsandhonors1: {
        type: String,
        required: true,
    },
    awardsandhonors2: {
        type: String,
        required: true,
    },
    awardsandhonors3: {
        type: String,
        required: true,
    },
    awardsandhonors4: {
        type: String,
        required: true,
    },
    awardsandhonors5: {
        type: String,
        required: true,
    },
    researchexperience1: {
        type: String,
        required: true,
    },
    researchexperience2: {
        type: String,
        required: true,
    },
    educationandtraining1: {
        type: String,
        required: true,
    },
    educationandtraining2: {
        type: String,
        required: true,
    },
    educationandtraining3: {
        type: String,
        required: true,
    },
    educationandtraining4: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('DoctorsDetail', HospitalSchema);
