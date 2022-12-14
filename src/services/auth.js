import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = (user) => {
    setUser(user);
    navigate('/profile');
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const isLogged = user !== null;

  const auth = { user, login, logout, isLogged };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

function AuthRoute(props) {
  const auth = React.useContext(AuthContext);
  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export { AuthProvider, useAuth, AuthRoute };
