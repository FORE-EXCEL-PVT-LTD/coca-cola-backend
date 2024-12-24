const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    email: { type: String, },
    module: { type: String, },
    score: { type: String, },
    percentage: { type: String, },
    updatedAt: { type: Date, },
    createdAt: { type: Date, default: Date.now },
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;