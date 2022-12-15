import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { users } from '../../data/users';
import { useAuth } from '../../services/auth';

function LoginPage() {
  const auth = useAuth();
  const location = useLocation();
  const [username, setUsername] = React.useState('');
  const [error, setError] = React.useState(false);

  const login = (e) => {
    e.preventDefault();

    const user = users.find((u) => u.username === username);

    if (user) {
      auth.login(user);
    } else {
      setError(true);
    }
  };

  if (auth.user) {
    const path = location.state?.from?.pathname || '/profile';
    return <Navigate to={path} replace />;
  }

  return (
    <>
      <h1>LoginPage</h1>

      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />

        <button type="submit">Entrar</button>
      </form>

      {error && (
        <p style={{ color: 'red', marginTop: '4px' }}>User doesn't exist!</p>
      )}
    </>
  );
}

export { LoginPage };
