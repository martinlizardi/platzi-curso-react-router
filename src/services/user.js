import React from 'react';
import { useAuth } from './auth';
import { ADMIN } from '../data/roles';
import { useUsersDB } from './usersDB';

function useUser() {
  const { user, update } = useAuth();
  const usersDb = useUsersDB();

  React.useEffect(() => {
    if (user) {
      usersDb.updateUser(user);
    }
  }, [user]);

  return {
    data: user,
    update,
    isAdmin: user?.roles?.includes(ADMIN) || false,
  };
}

export { useUser };
