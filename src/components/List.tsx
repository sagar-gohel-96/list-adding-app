import React from "react";
type User = {
  name: string;
  address: string;
  mobileNo?: number;
};
type UserListProops = {
  userList: User[];
};

const List = (props: UserListProops) => {
  return (
    <div>
      {props.userList &&
        props.userList.map((user, index) => {
          return (
            <div key={index}>
              <h1>user no : {index}</h1>
              <h1>user name :{user.name}</h1>
              <h1>user mobile no :{user.mobileNo}</h1>
              <h1>user address :{user.address}</h1>
            </div>
          );
        })}
    </div>
  );
};
export default List;
