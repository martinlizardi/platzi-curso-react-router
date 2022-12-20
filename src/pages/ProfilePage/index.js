import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from 'services/user';
import { useUsersDB } from 'services/usersDB';
import { EditData } from './EditData';
import { ProfileData } from './ProfileData';

function ProfilePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const usersDB = useUsersDB();
  const { data, update, isAdmin } = useUser();
  const user = (() => {
    if (!!slug) {
      const u = usersDB.findUser(slug);
      if (u) {
        return u;
      }

      navigate('/not-found');
    }
    return data;
  })();

  const [edit, setEdit] = React.useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const onSave = (newData) => {
    if (!!slug && slug !== data.username) {
      usersDB.updateUser({
        ...user,
        ...newData,
      });
    } else {
      update(newData);
    }
    toggleEdit();
  };

  const canEdit = isAdmin || data.username === user.username;

  return (
    <>
      <h1>ProfilePage</h1>
      <p>Welcome, {user?.username || 'Not User'}</p>
      {edit ? (
        <EditData user={user} handleSave={onSave} />
      ) : (
        <ProfileData user={user} />
      )}
      {canEdit && (
        <button onClick={toggleEdit}>{edit ? 'Cancel' : 'Edit'}</button>
      )}
    </>
  );
}

export { ProfilePage };
