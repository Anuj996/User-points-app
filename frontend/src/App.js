import React, { useEffect, useState } from 'react';
import UserSelector from './components/UserSelector';
import AddUserForm from './components/AddUserForm';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import { fetchLeaderboard, fetchUsers } from './services/api';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [awardedPoints, setAwardedPoints] = useState(null);

  const loadData = async () => {
    const allUsers = await fetchUsers();
    const ranks = await fetchLeaderboard();
    setUsers(allUsers);
    setLeaderboard(ranks);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-purple-200 animate-fade-in">
        <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-8 drop-shadow-lg">
          🏆 User Points Leaderboard
        </h1>

        <div className="space-y-8">
          {/* Add User Form */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-md border border-purple-100">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">👤 Add New User</h2>
            <AddUserForm onUserAdded={loadData} />
          </div>

          {/* User Selector */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl shadow-md border border-pink-100">
            <h2 className="text-2xl font-semibold text-pink-600 mb-3">🔽 Select User</h2>
            <UserSelector
              users={users}
              selectedUserId={selectedUserId}
              onChange={setSelectedUserId}
            />
          </div>

          {/* Claim Button */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md border border-indigo-100 text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">🎯 Claim Points</h2>
            <ClaimButton
              selectedUserId={selectedUserId}
              onPointsClaimed={() => {
                setAwardedPoints(null);
                loadData();
              }}
            />
            {awardedPoints && (
              <p className="mt-4 text-lg text-green-700 font-bold">
                🎉 Points Claimed: {awardedPoints}
              </p>
            )}
          </div>

          {/* Leaderboard */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl shadow-md border border-indigo-100">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">📊 Top 10 Leaderboard</h2>
            <Leaderboard leaderboard={leaderboard} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
