import React from "react";
import "../styles/UserList.css";
import UserCard from "./UserCard";
const UserList = ({ users }) => {
  return (
    <div className="container">
      {users.map((user, index) => (
        <div key={index}>
          <UserCard
            imageSrc={user.picture.thumbnail}
            altText="User"
            name={`${user.name.first} ${user.name.last}`}
          />
        </div>
      ))}
    </div>
  );
};

export default UserList;
