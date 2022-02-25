const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const contact = mongoose.model('Contact', contactSchema);

module.exports = contact;