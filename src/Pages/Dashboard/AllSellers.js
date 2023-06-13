import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSellers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_databaseurl}/users?userType=Seller`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handelUpdateSeler = (email) => {
    fetch(`${process.env.REACT_APP_databaseurl}/updateuser?email=${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  // console.log(users)
  return (
    <div>
      <h1 className="text-3xl text-center">All SELLERS</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th> User Type </th>
              <th>verified</th>
              <th>verify</th>
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
                <td>{user.sellerVarified ? "varified" : "non varified"}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handelUpdateSeler(user.email)}
                    className={`btn btn-sm btn-info ${
                      user.sellerVarified ? "btn-disabled" : "enabled:"
                    }`}
                  >
                    varify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
