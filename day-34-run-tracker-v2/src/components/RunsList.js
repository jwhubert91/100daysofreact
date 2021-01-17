import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const useRuns = () => {
  const [runs, setRuns] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('runs')
      .onSnapshot((snapshot) => {
        const newRuns = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRuns(newRuns);
      });
    return () => unsubscribe();
  }, []);
  return runs;
};

function RunsList() {
  const runs = useRuns();
  return (
    <div className='card mt-4'>
      <div className='card-body'>
        <h3 className='runs-list-header'>Runs List</h3>
        {runs.length !== 0 ? (
          <table className='runs-list-table table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Distance</th>
                <th>Time (minutes)</th>
              </tr>
            </thead>
            <tbody>
              {runs.map((run) => {
                return (
                  <tr key={run.id} className='run-list-table-row'>
                    <td>{run.date}</td>
                    <td>{run.title}</td>
                    <td>{run.distance} miles</td>
                    <td>{run.time} minutes</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p className='text-center'>
            <code>There are currently no runs to display.</code>
          </p>
        )}
      </div>
    </div>
  );
}

export default RunsList;
