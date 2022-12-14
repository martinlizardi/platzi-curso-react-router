import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}

        {/* <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/profile'>Profile</Link></li> */}

        {/* <li>
          <NavLink
            className={({ isActive }) => ''}
            style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li> */}
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
];

export { Menu };
