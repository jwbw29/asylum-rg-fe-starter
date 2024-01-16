import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../styles/LoginPage.less';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} id="login-button">
      Log In
    </button>
  );
};

export default LoginButton;
