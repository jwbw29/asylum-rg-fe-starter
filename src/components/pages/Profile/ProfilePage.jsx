// import React from 'react';

// const ProfilePage = () => {
//   return (
//     <div>
//       {' '}
//       {/*Container for Profile Page*/}
//       <div>
//         {/* Container for content */}
//         <h1>Profile</h1>
//         <div>
//           {/*Container for details*/}
//           <h2>Username</h2>
//           <h2>Name</h2>
//           <h2>Image</h2>
//           {/* <img>User Photo</img> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <article>
        {user?.picture && <img src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
        <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}: {user[objKey]}
            </li>
          ))}
        </ul>
      </article>
    )
  );
};

export default ProfilePage;
