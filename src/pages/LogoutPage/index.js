import React from 'react';
import { useAuth } from 'services/auth';

function LogoutPage() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <>
      <h1>LogoutPage</h1>

      <form onSubmit={logout}>
        <label>¿Seguro que quires salir?</label>

        <button type="submit">Salir</button>
      </form>
    </>
  );
}

export { LogoutPage };
