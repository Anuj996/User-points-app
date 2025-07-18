import React, { useState } from 'react';
import { addUser } from '../services/api';

const AddUserForm = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      setLoading(true);
      const newUser = await addUser(name);
      onUserAdded(newUser); // refresh user list
      setName('');
    } catch (error) {
      console.error('Failed to add user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleAddUser} className="mb-4 flex gap-2">
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded-md flex-grow"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add User'}
      </button>
    </form>
  );
};

export default AddUserForm;
