import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

//TODO Might need to replicate this for logout button and profile or anything that is hidden behind authentication

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return isAuthenticated && <button onClick={() => logout()}>Log Out</button>;
};

export default LogoutButton;
