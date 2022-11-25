import React from "react";
type User = {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
};
type userName = Omit<User, "email">;
type UserListprops = {
  data: userName;
};

const Partial = (props: Partial<UserListprops>) => {
  return <div>Partial{props.data?.name.firstname}</div>;
};

export default Partial;
