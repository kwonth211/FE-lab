import React, { useState } from 'react';
import './style.scss';
const Controlled = () => {
  const [name, setName] = useState('');
  return (
    <form>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </form>
  );
};

export default Controlled;
