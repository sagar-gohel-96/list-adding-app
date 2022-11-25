import React from "react";
export type User = {
  name: string | undefined;
  address: string;
  mobileNo?: number;
  email: string;
};
export type UserListProps = {
  userList: Partial<User>[];
};

const List = (props: UserListProps) => {
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
