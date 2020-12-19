import React, { useEffect, useState } from 'react';

function Secret() {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch('/api/secret', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Secret</h1>
      <p>{JSON.stringify(user, null, 2)}</p>
    </>
  );
}

export default Secret;
