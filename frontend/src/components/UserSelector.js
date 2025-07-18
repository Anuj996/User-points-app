import React from 'react';

const UserSelector = ({ users, selectedUserId, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="user-select" className="block mb-2 text-sm font-medium">
        Select User:
      </label>
      <select
        id="user-select"
        value={selectedUserId}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border rounded-md w-full"
      >
        <option value="">-- Select User --</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelector;
