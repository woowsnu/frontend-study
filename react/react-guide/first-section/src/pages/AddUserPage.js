import React, { useState } from 'react';
import AddUser from '../components/Users/AddUser';
import UsersList from '../components/Users/UsersList';

const AddUserPage = () => {
  const [users, setUsers] = useState([]);

  const handleUsersList = (data) => {
    setUsers([...users, data]);
  };

  return (
    <div>
      <AddUser handleUsersList={handleUsersList} />
      <UsersList users={users} />
    </div>
  );
};

export default AddUserPage;
