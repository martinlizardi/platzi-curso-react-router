import React from 'react';
import { Navigate } from 'react-router-dom';
import { users } from '../../data/users';
import { useAuth } from '../../services/auth';

function LoginPage() {
  const auth = useAuth();
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
    return <Navigate to="/profile" />;
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
