const express = require('express');
const router = express.Router();
const {
  getUsers,
  getLeaderboard,
  addUser,
  claimPoints,
} = require('../controllers/userController');

// @route   GET /api/users
router.get('/', getUsers);

// @route   GET /api/users/leaderboard
router.get('/leaderboard', getLeaderboard);

// @route   POST /api/users/add
router.post('/add', addUser);

// @route   POST /api/users/claim/:id
router.post('/claim/:id', claimPoints);

module.exports = router;
