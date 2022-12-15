import React from 'react';
import { users as usersDB } from '../data/users';

const UsersDBContext = React.createContext();

const UsersDBProvider = ({ children }) => {
  const [users, setUsers] = React.useState(usersDB || []);

  const findUser = (username) => {
    return users.find((u) => u.username === username);
  };

  const updateUser = (user) => {
    const idx = users.findIndex((u) => u.username === user.username);
    if (idx >= 0) {
      const usersTemp = [...users];
      usersTemp[idx] = {
        ...usersTemp[idx],
        ...user,
      };
      setUsers(usersTemp);
    }
  };

  const value = { users, findUser, updateUser };
  return (
    <UsersDBContext.Provider value={value}>{children}</UsersDBContext.Provider>
  );
};

const useUsersDB = () => {
  return React.useContext(UsersDBContext);
};

export { UsersDBProvider, useUsersDB };
