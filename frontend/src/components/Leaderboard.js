import React from 'react';

const Leaderboard = ({ leaderboard }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-semibold mb-4">🏆 Leaderboard</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Rank</th>
            <th className="py-2">Name</th>
            <th className="py-2">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(leaderboard) && leaderboard.map((user, index) => (
            <tr key={user._id} className="border-b hover:bg-gray-50">
              <td className="py-2">{user.rank}</td>
              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
