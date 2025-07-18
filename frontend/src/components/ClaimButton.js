import React, { useState } from 'react';
import { claimPoints } from '../services/api';

const ClaimButton = ({ selectedUserId, onPointsClaimed }) => {
  const [loading, setLoading] = useState(false);
  const [claimedPoints, setClaimedPoints] = useState(null);

  const handleClaim = async () => {
    if (!selectedUserId) {
      alert('Please select a user first.');
      return;
    }

    setLoading(true);
    try {
      const data = await claimPoints(selectedUserId);
      setClaimedPoints(data.pointsAwarded);
      onPointsClaimed(); // Refresh leaderboard or user state
    } catch (error) {
      console.error('Error claiming points:', error.message);

      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Request config error:', error.config);
      }

      alert('Failed to claim points.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-4 text-center">
      <button
        onClick={handleClaim}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? 'Claiming...' : 'Claim Points'}
      </button>
      {claimedPoints !== null && (
        <p className="mt-2 text-green-600">🎉 {claimedPoints} points awarded!</p>
      )}
    </div>
  );
};

export default ClaimButton;
