import React from 'react';

const getRankEmoji = (index) => {
  if (index === 0) return '🥇';
  if (index === 1) return '🥈';
  if (index === 2) return '🥉';
  return `${index + 1}`;
};

const Leaderboard = ({ leaderboard }) => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white rounded-2xl shadow-xl p-6">
      <h2 className="text-3xl font-extrabold text-purple-700 mb-6 text-center flex items-center justify-center gap-2">
        🏆 Leaderboard
      </h2>
      <table className="w-full text-left border-collapse">
        <thead className="bg-purple-200 text-purple-800">
          <tr>
            <th className="py-3 px-4 rounded-tl-lg">Rank</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4 rounded-tr-lg">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(leaderboard) && leaderboard.map((user, index) => (
            <tr
              key={user._id}
              className="hover:bg-purple-50 transition duration-200 ease-in-out"
            >
              <td className="py-3 px-4 font-semibold text-purple-700 text-lg">
                {getRankEmoji(index)}
              </td>
              <td className="py-3 px-4 text-gray-800">{user.name}</td>
              <td className="py-3 px-4 text-gray-900 font-medium">{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
