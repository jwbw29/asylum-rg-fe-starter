import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

//TODO Might need to replicate this for logout button and profile or anything that is hidden behind authentication

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Link
        style={{ color: '#E2F0F7', paddingRight: '75px' }}
        onClick={() => logout()}
      >
        Log Out
      </Link>
    )
  );
};

export default LogoutButton;
