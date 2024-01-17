import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../../styles/ProfilePage.less';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();
  const rawDate = user.updated_at;

  const formattedDate = new Date(rawDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });

  return (
    isAuthenticated && (
      <div className="section-container">
        <div className="content-container">
          {/* <div className="profile-photo"> */}{' '}
          {user?.picture && <img src={user.picture} alt={user?.name} />}
          {/* </div> */}
          <h2>{user?.name}</h2>
          <div className="user-info-container">
            <div className="user-info">
              <span className="obj-key">Username: </span>
              <span className="user-value">{user.nickname}</span>
            </div>
            <div className="user-info">
              <span className="obj-key">Sub: </span>
              <span className="user-value">{user.sub}</span>
            </div>
            <div className="user-info">
              <span className="obj-key">Last Updated: </span>
              <span className="user-value">{formattedDate}</span>
            </div>
          </div>{' '}
        </div>
      </div>
    )
  );
};

export default ProfilePage;

// user object
//  {
//   "sub": "github|71021894",
//   "nickname": "jwbw29",
//   "name": "Justin Byrd",
//   "picture": "https://avatars.githubusercontent.com/u/71021894?v=4",
//   "updated_at": "2024-01-12T22:22:06.916Z"
//   }
// Would then apply this logic
/* {Object.keys(user).map((objKey, i) => (
    <div>
      <span className="obj-key">Username: </span>
      <span className="user-value">{user.nickname}</span>
    </div>
    <div>
      <span className="obj-key">Sub: </span>
      <span className="user-value">{user.sub}</span>
    </div>
    <div>
      <span className="obj-key">Last Updated: </span>
      <span className="user-value">{user.updated_at}</span>
    </div>

            ))} */
