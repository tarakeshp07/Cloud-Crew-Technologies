import React, { useState } from 'react';
import "./style.css";

const PasswordReveal = ({ value, onChange }) => {
  const [reveal, setReveal] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const handleInputChange = (e) => {
    // Pass the change up to the parent component
    onChange({
      target: {
        name: 'password',
        value: e.target.value
      }
    });
  };

  const handleRevealClick = () => {
    setScanning(true);
    setReveal(!reveal);
    
    setTimeout(() => {
      setScanning(false);
      setPasswordType(reveal ? 'password' : 'text');
    }, 500);
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type={passwordType}
        name="password"
        value={value}
        onChange={handleInputChange}
        placeholder="Password"
        className={scanning ? 'active' : ''}
      />
      <div id="fakepass" className={scanning ? 'scan' : ''}>
        {value.split('').map(() => '•').join('')}
      </div>
      <button
        type="button"
        id="reveal"
        onClick={handleRevealClick}
        disabled={!value}
        className={reveal ? 'open' : ''}
      >
        <span></span>
      </button>
    </div>
  );
};

export default PasswordReveal;