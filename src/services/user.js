import { useAuth } from './auth';
import { ADMIN } from '../data/roles';

function useUser() {
  const { user } = useAuth();

  return {
    data: user,
    isAdmin: user?.roles?.includes(ADMIN) || false,
  };
}

export { useUser };
