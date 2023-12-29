import React from "react";
interface UserProps {
  users: string[];
}
const ConnectedUsers = ({ users }: UserProps) => {
  return (
    <>
      <h4>Connected Users</h4>
      {users.map((val, index) => (
        <h6 key={index}>{val}</h6>
      ))}
    </>
  );
};

export default ConnectedUsers;
