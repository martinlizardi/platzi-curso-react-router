import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.to}>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const routes = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/blog',
    text: 'Blog',
  },
  {
    to: '/profile',
    text: 'Profile',
  },
  {
    to: '/login',
    text: 'Login',
  },
  {
    to: '/logout',
    text: 'Logout',
  },
];

export { Menu };
