const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  totalPoints: {
    type: Number,
    default: 0
  },
  lastClaimTime: {
    type: Date,
    default: null  // ✅ added to support 24-hour cooldown
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
