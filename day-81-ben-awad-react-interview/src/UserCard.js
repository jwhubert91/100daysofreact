import React from "react";

export default function UserCard({ user }) {
  const { picture, name } = user;

  return (
    <div className="userCard">
      <img src={picture.large} alt={name.first} />
      <h2>
        {name.first} {name.last}
      </h2>
      {/* {JSON.stringify(user)} */}
    </div>
  );
}