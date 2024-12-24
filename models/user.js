const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, },
    email: { type: String, },
    password: { type: String, },
    updatedAt: { type: Date, },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;