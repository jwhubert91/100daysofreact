import React, { useState } from 'react';

import firebase from '../firebase';

const AddRunForm = () => {
  const [title, setTitle] = useState('');
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection('runs')
      .add({
        title,
        time_minutes: parseInt(time),
        distance,
        dateTime: Date.now(),
      })
      .then(() => {
        setTitle('');
        setDistance(0);
        setTime(0);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Run Entry</h4>
      <div>
        <label>Title</label>
        <input
          type='text'
          name='title'
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>Distance</label>
        <input
          type='number'
          name='distance'
          onChange={(e) => setDistance(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>Time</label>
        <input
          type='number'
          name='time'
          onChange={(e) => setTime(e.currentTarget.value)}
        />
      </div>
      <button>Add Time Entry</button>
    </form>
  );
};

export default AddRunForm;
