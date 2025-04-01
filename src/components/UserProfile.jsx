// components/UserProfile.js
import React from 'react';

function UserProfile({ userName = "John Doe" }) {
  return (
    <div className="user-profile">
      <h2>Welcome {userName}</h2>
      <div className="user-avatar">
        {userName.split(' ').map(name => name[0]).join('')}
      </div>
    </div>
  );
}

export default UserProfile;