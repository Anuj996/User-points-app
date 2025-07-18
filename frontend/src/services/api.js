import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/users';

// Get all users
export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

// Get sorted leaderboard
export const fetchLeaderboard = async () => {
  const response = await axios.get(`${API_BASE_URL}/leaderboard`);
  return response.data;
};

// Add new user (name & email required if backend expects both)
export const addUser = async (name, email = 'placeholder@example.com') => {
  const response = await axios.post(`${API_BASE_URL}/add`, { name, email });
  return response.data;
};

// Claim points for a user
export const claimPoints = async (userId) => {
  const response = await axios.post(`${API_BASE_URL}/claim/${userId}`);
  return response.data;
};
