import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../styles/LoginPage.less';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      // style={{
      //   backgroundColor: '#f5f5f5',
      //   color: '#000000',
      //   border: 'none',
      //   borderRadius: '5px',
      //   padding: '10px',
      //   fontSize: '20px',
      //   fontWeight: 'bold',
      //   cursor: 'pointer',
      // }}
      onClick={() => loginWithRedirect()}
      id="LoginButton"
    >
      Log In
    </button>
  );
};

export default LoginButton;
