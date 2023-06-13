import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../Context/UserContext";
import { deleteUser } from "firebase/auth";

const AllBuyers = () => {
  const { user } = useContext(authContext);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_databaseurl}/users?userType=Buyer`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  //   console.log(users);

  return (
    <div>
      <h1 className="text-3xl text-center m-3">All BUYERS</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th> User Type </th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>
                  <img
                    className="w-10 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />{" "}
                  {user.displayName}{" "}
                </td>
                <td> {user.userType} </td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
