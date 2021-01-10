import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { auth } from '../firebase';
import profilePicture from '../images/canoe450x450.jpg';

const ProfilePage = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  return (
    <div className='mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8'>
      <div className='flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4'>
        <div
          style={{
            background: `url(${
              photoURL || profilePicture
            })  no-repeat center center`,
            backgroundSize: 'cover',
            height: '200px',
            width: '200px',
          }}
          className='border border-blue-300'
        ></div>
        <div className='md:pl-4'>
          <h2 className='text-2xl font-semibold'>{displayName}</h2>
          <h3 className='italic'>{email}</h3>
        </div>
      </div>
      <button
        className='w-full py-3 bg-red-600 mt-4 text-white'
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};
export default ProfilePage;
