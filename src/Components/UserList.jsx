import React from "react";
import "../styles/UserList.css";
const UserList = ({ users }) => {
  return (
    <div className="container">
      {users.map((user, index) => (
        <div className="card" key={index}>
          <img className="avatar" src={user.picture.thumbnail} alt="User" />
          <span className="name">{`${user.name.first} ${user.name.last}`}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
