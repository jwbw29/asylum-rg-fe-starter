import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup', //TODO: if I delete this component, make sure Login page is redirected correctly if someone clicks "login" and isn't authenticated
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignupButton;
