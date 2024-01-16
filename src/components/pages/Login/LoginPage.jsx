import React from 'react';
import LoginButton from '../../common/login-button';
import '../../../styles/LoginPage.less';

const LoginPage = () => {
  return (
    <div className="form-container">
      <div className="login-form">
        <h1>Login</h1>
        <form>
          <div className="email">
            {' '}
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="password">
            {' '}
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <LoginButton />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
