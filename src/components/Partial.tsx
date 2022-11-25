import React from "react";
import { Data } from "../App";
import { User, UserListProps } from "./List";
import PartialL from "./PartialL";

interface PartialProps {
  data: Data;
}

const Partial: React.FC<PartialProps> = (props) => {
  const { data } = props;
  return (
    <div>
      <PartialL email={data.email} />
    </div>
  );
};

export default Partial;
