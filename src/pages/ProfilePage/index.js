import React from 'react';
import { useAuth } from '../../services/auth';

function ProfilePage() {
  const auth = useAuth();

  return (
    <>
      <h1>ProfilePage</h1>
      <p>Welcome, {auth?.user?.username || 'Not User'}</p>
    </>
  );
}

export { ProfilePage };
