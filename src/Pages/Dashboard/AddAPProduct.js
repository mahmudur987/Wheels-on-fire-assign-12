import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authContext } from "../../Context/UserContext";

const AddAPProduct = () => {
  const [loading, SetLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const { user } = useContext(authContext);

  // console.log(user)
  const handleAddProduct = (values) => {
    console.log(values);

    SetLoading(true);

    const image = values.picture[0];
    const imageData = new FormData();
    imageData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEbbkey}`;
    fetch(url, {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then((imagedata) => {
        console.log("imageData", imagedata);
        if (imagedata.success) {
          const picture = imagedata.data.display_url;

          let catagoryId;
          if (values.catagoryName === "Mountain Bike") {
            catagoryId = 1;
          }
          if (values.catagoryName === "Road Bike") {
            catagoryId = 2;
          }
          if (values.catagoryName === "Hybrid Bike") {
            catagoryId = 3;
          }
          const newValues = { ...values, catagoryId, Sold: false, picture };
          fetch(`${process.env.REACT_APP_databaseurl}/cycles`, {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(newValues),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                toast.success("your product added successfully");
                reset();
                SetLoading(false);
              }
            })
            .catch((err) => console.error(err));

          console.log(newValues);
        }
      });

    reset();
  };

  return (
    <div>
      <form
        className="grid mx-auto  w-9/12"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <div className="form-control w-full   ">
          <label className="label">
            <span className="label-text"> Product Title</span>
          </label>
          <input
            className="input input-bordered w-full  "
            type="text"
            {...register("productTitle", {
              required: "Required",
            })}
          />
          {errors.productTitle && errors.productTitle.message}
        </div>
        <div className="form-control w-full   text-red-500">
          <label className="label">
            <span className="label-text"> Add A Picture</span>
          </label>
          <input
            className="input input-bordered w-full  "
            type="file"
            {...register("picture", {
              required: "please selecta  photo",
            })}
          />
          {errors.picture && errors.picture.message}
        </div>

        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text"> Product Catagory</span>
          </label>
          <select
            {...register("catagoryName", {
              required: "Required",
            })}
            className="select select-primary w-full  "
          >
            <option disabled selected value={"Mountain Bike"}>
              Mountain Bike{" "}
            </option>
            <option value={"Road Bike"}>Road Bike</option>
            <option value={"hybrid Bike"}>Hybrid Bike</option>
          </select>

          {errors.catagoryName && errors.catagoryName.message}
        </div>

        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text"> Using Duration</span>
          </label>
          <input
            className="input input-bordered w-full  "
            type="text"
            {...register("usingDuration", {
              required: "Required",
            })}
          />
          {errors.usingDuration && errors.usingDuration.message}
        </div>

        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text"> Brand</span>
          </label>
          <input
            className="input input-bordered w-full  "
            type="text"
            {...register("brand", {
              required: "Required",
            })}
          />
          {errors.brand && errors.brand.message}
        </div>

        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text"> Condition</span>
          </label>
          <input
            className="input input-bordered w-full  "
            type="text"
            {...register("condition", {
              required: "Required",
            })}
          />
          {errors.condition && errors.condition.message}
        </div>

        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text"> Details</span>
          </label>
          <input
            className="input input-bordered w-full  "
            type="text"
            {...register("about", {
              required: "Required",
            })}
          />
          {errors.about && errors.about.message}
        </div>

        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text"> Price</span>
          </label>
          <input
            className="input input-bordered w-full  "
            type="text"
            {...register("price", {
              required: "Required",
            })}
          />
          {errors.price && errors.price.message}
        </div>

        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text">User name</span>
          </label>
          <input
            defaultValue={user.displayName}
            className="input input-bordered w-full  "
            type="text"
            {...register("userName", {
              required: "name is must",
            })}
          />
          {errors.username && errors.userName.message}
        </div>

        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text"> Phone</span>
          </label>
          <input
            className="input input-bordered w-full  "
            type="text"
            {...register("phone", {
              required: "Required",
            })}
          />
          {errors.phone && errors.phone.message}
        </div>

        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text"> Location</span>
          </label>
          <input
            className="input input-bordered w-full  "
            type="text"
            {...register("location", {
              required: "Required",
            })}
          />
          {errors.location && errors.location.message}
        </div>

        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text"> email</span>
          </label>
          <input
            defaultValue={user.email}
            className="input input-bordered w-full  "
            type="email"
            {...register("email", {
              required: "Required",
            })}
          />
          {errors.email && errors.email.message}
        </div>

        {/* <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text"> Phone</span>
                    </label>
                    <input className="input input-bordered w-full  "
                        type="text"
                        {...register("phone", {
                            required: "Required",
                        })}
                    />
                    {errors.phone && errors.phone.message}
                </div> */}

        <button className="btn btn-primary" type="submit">
          {" "}
          {loading ? "uploading" : "submit"}
        </button>
      </form>
    </div>
  );
};

export default AddAPProduct;
