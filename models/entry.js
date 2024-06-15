const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    time: String,
    date: String,
    title: String,
    mood: String,
    entry: String
});

const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;