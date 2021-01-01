import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { auth } from '../firebase';

function ProfilePage() {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  return (
    <div className='container'>
      <div className='col border border-primary rounded d-flex flex-column'>
        <div className='row m-3'>
          <div
            style={{
              background: `url(${
                photoURL ||
                'https://in.bmscdn.com/iedb/artist/images/website/poster/large/brian-cox-356-24-03-2017-12-32-59.jpg'
              })  no-repeat center center`,
              backgroundSize: 'cover',
              height: '200px',
              width: '200px',
            }}
            className='border border-info'
          ></div>
        </div>
        <div className='row mt-1 ml-3'>
          <h2>{displayName}</h2>
        </div>
        <div className='row mt-1 ml-3'>
          <h3>
            <em>{email}</em>
          </h3>
        </div>
        <div className='row mx-3 my-2'>
          <button
            className='btn btn-block btn-dark width-100'
            onClick={() => auth.signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
