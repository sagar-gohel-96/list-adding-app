import React from "react";
import { Data } from "../App";
import { User, UserListProps } from "./List";
import { PartialUser } from "./types";
// type userName = Omit<User, "email">;
type DataProps = {
  email: string;
};
const PartialL = (props: DataProps) => {
  return <div>Partial{props.email}</div>;
};

export default PartialL;
