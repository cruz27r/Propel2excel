import React, { useState } from 'react';
import './MaintenanceCover.css';

const MaintenanceCover = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="maintenance-cover">
      <div className="maintenance-message">
        <h1>Website Under Maintenance</h1>
        <p>
          For content, email <a href="mailto:Propel@propel2excel.com">Propel@propel2excel.com</a> and visit{' '}
          <a href="https://linktr.ee/propel2excel?utm_source=linktree_admin_share" target="_blank" rel="noopener noreferrer">
            Propel2Excel Resources
          </a>
          .
        </p>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default MaintenanceCover;