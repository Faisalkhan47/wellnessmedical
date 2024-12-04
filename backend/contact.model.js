const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    no: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('contact', contactSchema);