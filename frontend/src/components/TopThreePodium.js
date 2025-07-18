import React from 'react';

const crownEmoji = ['👑', '🥈', '🥉'];

const TopThreePodium = ({ leaderboard }) => {
  const topThree = leaderboard.slice(0, 3);

  return (
    <div className="bg-yellow-100 rounded p-4 mb-6 shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Top 3 Podium</h2>
      <div className="flex justify-around items-end gap-4">
        {topThree.map((user, index) => (
          <div
            key={user._id}
            className={`text-center p-4 rounded-lg ${
              index === 0 ? 'bg-yellow-300' : index === 1 ? 'bg-gray-200' : 'bg-orange-200'
            }`}
          >
            <div className="text-3xl mb-2">{crownEmoji[index]}</div>
            <div className="font-semibold">{user.name}</div>
            <div className="text-sm">Points: {user.totalPoints}</div>
            <div className="text-xs text-gray-600">Rank {user.rank}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopThreePodium;
