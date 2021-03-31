import React, { useState } from 'react';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const { login, isAuthError } = useAuth();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = (event) => {
    event.preventDefault();
    login(userName, password);
  };

  return (
    <section className="login" data-testid="login">
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input
              required
              type="text"
              id="username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input
              required
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        {isAuthError && (
          <p className="error-message">
            Incorrect user name or password, please try again
          </p>
        )}
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
