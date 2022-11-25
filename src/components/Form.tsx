import React, { useState } from "react";
import List from "./List";
const Form = () => {
  type User = {
    name: string;
    address: string;
    mobileNo?: number;
  };
  const [userList, setUserList] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    name: "",
    address: "",
  });
  return (
    <>
      <div>
        <h1>User data :</h1>
        <form
          onSubmit={(e) => {
            setUser({
              name: "",
              address: "",
              // mobileNo: null,
            });
            e.preventDefault();
            setUserList([...userList, user]);
          }}
        >
          <tr>
            <td>
              <label htmlFor="">Name : </label>
            </td>
            <td>
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <br />
          </tr>

          <tr>
            <td>
              <label htmlFor="">Address : </label>
            </td>
            <td>
              <input
                type="text"
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <br />
          </tr>
          <tr>
            <td>
              <label htmlFor="">Mobile Number : </label>
            </td>
            <td>
              <input
                type="number"
                value={user?.mobileNo}
                onChange={(e) =>
                  setUser({ ...user, mobileNo: Number(e.target.value) })
                }
              />
            </td>
          </tr>
          <tr>
            <br />
          </tr>
          <tr key="">
            <button type="submit" />
          </tr>
        </form>
      </div>
      <div>
        <List userList={userList} />
      </div>
    </>
  );
};

export default Form;
