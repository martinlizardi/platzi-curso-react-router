import React from 'react';

const ProfileData = ({ user }) => {
  return (
    <ul>
      <li>
        <b>Phonenumber:</b> {user?.phonenumber || '-'}
      </li>
      <li>
        <b>Description:</b> {user?.description || '-'}
      </li>
      <li>
        <b>Roles:</b> {user?.roles || '-'}
      </li>
    </ul>
  );
};

export { ProfileData };
