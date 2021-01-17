import React, { useState } from 'react';
import firebase from '../firebase';
var Filter = require('bad-words');

function NewRunForm() {
  const [date, setDate] = useState(Date.now());
  const [title, setTitle] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');

  const filter = new Filter();

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection('runs')
      .add({
        date,
        title: filter.clean(title),
        distance,
        time,
      })
      .then(() => {
        setDate('');
        setTitle('');
        setDistance('');
        setTime('');
      });
  };

  return (
    <div className='card border border-primary new-run-form'>
      <div className='card-body'>
        <form onSubmit={handleSubmit} className='form-inline'>
          <div className='input-group'>
            <input
              type='date'
              name='date'
              className='form-control'
              onChange={(e) => setDate(e.currentTarget.value)}
              value={date}
            />
          </div>
          <div className='input-group'>
            <input
              type='text'
              name='title'
              className='form-control'
              placeholder='Title'
              onChange={(e) => setTitle(e.currentTarget.value)}
              value={title}
            />
          </div>
          <div className='input-group'>
            <input
              type='number'
              name='distance'
              className='form-control'
              placeholder='Distance'
              value={distance}
              onChange={(e) => setDistance(e.currentTarget.value)}
            />
          </div>
          <div className='input-group'>
            <input
              type='number'
              name='time'
              className='form-control'
              placeholder='Time (mins)'
              value={time}
              onChange={(e) => setTime(e.currentTarget.value)}
            />
          </div>
          <div className='input-group'>
            <button className='btn btn-block btn-success'>Add Run</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewRunForm;
