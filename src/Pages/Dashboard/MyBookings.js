import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const MyBookings = () => {
  const { user } = useContext(authContext);
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["userbooking", `${user?.email}`],
    queryFn: () =>
      fetch(
        `${process.env.REACT_APP_databaseurl}/userbooking?email=${user?.email}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });
  const handleDelete = (_id, productId) => {
    console.log(_id, productId);
    const sure = window.confirm("are sure to remove this booking");
    if (sure) {
      fetch(`${process.env.REACT_APP_databaseurl}/booking/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            toast.success("your item remove successfully");
            fetch(`${process.env.REACT_APP_databaseurl}/recycle/${productId}`, {
              method: "PATCH",
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
          }
        })
        .catch((err) => console.error(err));
    } else {
    }
  };

  return (
    <div className="overflow-x-auto overflow-y-auto w-full">
      <table className="table w-full ">
        <thead>
          <tr>
            <th>no</th>
            <th>Product Name & Id</th>
            <th> Your Name & address</th>
            <th>Confirm/Delete </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, idx) => (
            <tr key={idx} className="hover">
              <th>{idx + 1}</th>
              <td>
                <p className="font-bold">{booking.productName}</p>
                <p className="font-bold">{booking.price}</p>
                <p>{booking._id.slice(0, 12)}</p>
              </td>
              <td>
                <p>{booking.name}</p>
                <p>{booking.phone}</p>
                <p>{booking.email}</p>
                <p>Meeting Point: {booking.meetingLocation}</p>
              </td>
              <td className="flex flex-col items-center">
                <button className="btn btn-outline m-1 btn-sm">
                  Purchase done
                </button>
                <Link to={`/dashboard/cheakout/${booking._id}`}>
                  {" "}
                  <button className="btn btn-primary btn-sm">
                    pay online
                  </button>{" "}
                </Link>
                <button
                  onClick={() => handleDelete(booking._id, booking.productId)}
                  className="btn btn-info m-1 btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
