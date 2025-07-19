const User = require('../models/user');
const ClaimHistory = require('../models/claimHistory');

// @desc    Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get leaderboard
const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ totalPoints: -1 }).limit(10); // points ➝ totalPoints
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Add a new user
const addUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = new User({ name, email, totalPoints: 0 }); // points ➝ totalPoints
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Claim points
const claimPoints = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const now = new Date();
    const lastClaimTime = user.lastClaimTime || new Date(0); // fallback to epoch
    const hoursSinceLastClaim = (now - lastClaimTime) / (1000 * 60 * 60);

    if (hoursSinceLastClaim < 24) {
      return res.status(400).json({ message: 'You can only claim points once every 24 hours.' });
    }

    const pointsAwarded = Math.floor(Math.random() * 21) + 10; // Random between 10–30
    user.totalPoints += pointsAwarded;
    user.lastClaimTime = now;
    await user.save();

    const claim = new ClaimHistory({
      userId,
      pointsClaimed: pointsAwarded, // ✅ correct field name
    });
    await claim.save();

    res.status(200).json({ message: 'Points claimed successfully', pointsAwarded });
  } catch (err) {
    console.error('Error claiming points:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUsers,
  getLeaderboard,
  addUser,
  claimPoints,
};
