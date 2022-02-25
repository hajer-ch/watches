const mongoose = require('mongoose');

const montreSchema = mongoose.Schema({
    price: { type: Number, required: true },
    marque: String,
    image: String,
    description: String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const montre = mongoose.model('Montre', montreSchema);

module.exports = montre;