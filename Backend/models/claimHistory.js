const mongoose = require('mongoose');

const claimHistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  pointsClaimed: {
    type: Number,
    required: true
  },
  claimedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const ClaimHistory = mongoose.model('ClaimHistory', claimHistorySchema);

module.exports = ClaimHistory;
