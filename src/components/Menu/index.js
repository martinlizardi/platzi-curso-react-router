import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'services/auth';

function Menu() {
  const auth = useAuth();

  if (!auth.user) {
  }

  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;

          return (
            <li key={route.to}>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const routes = [
  {
    to: '/',
    text: 'Home',
    private: false,
  },
  {
    to: '/blog',
    text: 'Blog',
    private: false,
  },
  {
    to: '/profile',
    text: 'Profile',
    private: true,
  },
  {
    to: '/login',
    text: 'Login',
    private: false,
    publicOnly: true,
  },
  {
    to: '/logout',
    text: 'Logout',
    private: true,
  },
];

export { Menu };
