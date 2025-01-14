var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    favoriteColor: { type: String, required: false },
    birthday: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);