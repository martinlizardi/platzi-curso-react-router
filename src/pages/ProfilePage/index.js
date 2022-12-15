import React from 'react';
import { useUser } from '../../services/user';
import { EditData } from './EditData';
import { ProfileData } from './ProfileData';

function ProfilePage() {
  const { data, update } = useUser();
  const [edit, setEdit] = React.useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const onSave = (newData) => {
    update(newData);
    toggleEdit();
  };

  return (
    <>
      <h1>ProfilePage</h1>
      <p>Welcome, {data?.username || 'Not User'}</p>
      {edit ? (
        <EditData user={data} handleSave={onSave} />
      ) : (
        <ProfileData user={data} />
      )}
      <button onClick={toggleEdit}>{edit ? 'Cancel' : 'Edit'}</button>
    </>
  );
}

export { ProfilePage };
