import React from 'react';

const EditData = ({ user, handleSave }) => {
  const [phone, setPhone] = React.useState(user?.phonenumber || '');
  const [desc, setDesc] = React.useState(user?.description || '');

  const save = (e) => {
    e.preventDefault();
    handleSave({ phonenumber: phone, description: desc });
  };

  const isDisabled = !(phone && desc);

  return (
    <form onSubmit={save}>
      <label>
        Phonenumber:
        <input
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
      </label>
      <button type="submit" disabled={isDisabled}>
        Save
      </button>
    </form>
  );
};

export { EditData };
