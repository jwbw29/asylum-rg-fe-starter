import React from 'react';
import LoginButton from '../../common/login-button';
import '../../../styles/LoginPage.less';

const LoginPage = () => {
  return (
    <div>
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>
      <div className="middle-section">
        <div className="login-form">
          <h1>Login</h1>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <LoginButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
