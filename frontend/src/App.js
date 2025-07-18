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
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">🏆 User Points Leaderboard</h1>
      <AddUserForm onUserAdded={loadData} />
      <UserSelector
        users={users}
        selectedUserId={selectedUserId}
        onChange={setSelectedUserId}
      />
      <ClaimButton
        selectedUserId={selectedUserId}
        onPointsClaimed={() => {
          setAwardedPoints(null); // reset message before claiming again
          loadData();
        }}
      />
      {awardedPoints && (
        <p className="mt-2 text-green-600 font-medium">🎉 Points Claimed: {awardedPoints}</p>
      )}
      <Leaderboard leaderboard={leaderboard} />
    </div>
  );
}

export default App;
