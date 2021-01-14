import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const SORT_OPTIONS = {
  TITLE_ASC: { column: 'title', direction: 'asc' },
  TITLE_DESC: { column: 'title', direction: 'desc' },
  DISTANCE_ASC: { column: 'distance', direction: 'asc' },
  DISTANCE_DESC: { column: 'distance', direction: 'desc' },
  TIME_ASC: { column: 'time_minutes', direction: 'asc' },
  TIME_DESC: { column: 'time_minutes', direction: 'desc' },
  DATE_ASC: { column: 'dateTime', direction: 'asc' },
  DATE_DESC: { column: 'dateTime', direction: 'desc' },
};

function useRuns(sortBy) {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('runs')
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newRuns = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTimes(newRuns);
      });
    console.log('Data retrieved from Firebase Firestore');
    // tell React that when our firebase load is finished, we can unsubscribe from the Firebase web socket.
    return () => unsubscribe();
  }, [sortBy]);

  return times;
}

const RunsList = () => {
  const [sortBy, setSortBy] = useState('DATE_DESC');
  const runs = useRuns(sortBy);

  return (
    <div>
      <h2>Runs List</h2>
      <div>
        <label>Sort By:</label>{' '}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.currentTarget.value)}
        >
          <option value='DATE_DESC'>Date - Most Recent</option>
          <option value='DATE_ASC'>Date - Least Recent</option>
          <option value='DISTANCE_DESC'>Distance - Longest</option>
          <option value='DISTANCE_ASC'>Distance - Shortest</option>
          <option value='TIME_ASC'>Time - Shortest</option>
          <option value='TIME_DESC'>Time - Longest</option>
          <option value='TITLE_ASC'>Title (a-z)</option>
          <option value='TITLE_DESC'>Title (z-a)</option>
        </select>
      </div>
      <ol>
        {runs.map((run) => {
          const currentDate = new Date(run.dateTime).toDateString();
          return (
            <li key={run.id}>
              <div className='run-entry'>
                {run.title}
                <code className='date'>{currentDate}</code>
                <code className='distance'>{run.distance} miles</code>
                <code className='time'>{run.time_minutes} minutes</code>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default RunsList;
