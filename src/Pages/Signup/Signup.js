import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/UserContext";
import Loading from "../../Components/Loading/Loading";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signUp, updateUserProfile, Setloading, loading } =
    useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // console.log(createdUserEmail)
  // const [token] = useToken(createdUserEmail);

  // if (token) {
  //     navigate('/');

  // }

  const handleSignUp = (data) => {
    Setloading(true);

    const image = data.photo[0];
    const imageData = new FormData();
    imageData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEbbkey}`;
    fetch(url, {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then((imagedata) => {
        // console.log(imagedata.data)
        if (imagedata.success) {
          const photoURL = imagedata.data.display_url;
          signUp(data.email, data.password)
            .then((result) => {
              // const user = result.user;

              updateProfile(data.name, photoURL, data.email, data.userType);
            })
            .catch((error) => {
              toast.error(error.message);
              console.error(error);
            });
        }
      });
  };

  const updateProfile = (displayName, photoURL, email, userType) => {
    const fullprofile = { displayName, photoURL, email, userType };
    const profile = { displayName, photoURL };
    updateUserProfile(profile)
      .then(() => {
        saveUser(fullprofile);
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };

  const saveUser = (fullprofile) => {
    // console.log(fullprofile);
    fetch(`${process.env.REACT_APP_databaseurl}/users`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullprofile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Save user", data);
        if (data.acknowledged) {
          toast.success("user signup successfully");
          fetch(
            `${process.env.REACT_APP_databaseurl}/jwt?email=${fullprofile.email}`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              localStorage.setItem("accessToken", data.accessToken);
            });
        }
      })
      .catch((error) => {
        toast.error(error.message);

        console.error("Error:", error);
      });
    toast.success("user signup successfully");
    Setloading(false);
    navigate(from, { replace: true });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="h-[1000px] flex justify-center items-center font-bold bg-sky-100">
      <div className="border border-black p-4">
        <h1 className="text-4xl">Sign up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name is must",
              })}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && <p role="alert">{errors.name?.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose Photo</span>
            </label>
            <input
              {...register("photo", {
                required: "please select a photo",
              })}
              type="file"
              placeholder="Choose photo"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.photo?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Buyer/Seller</span>
            </label>
            <select
              {...register("userType", {
                required: " Select atleast one",
              })}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected value={"Buyer"}>
                Buyer
              </option>
              <option value={"Buyer"}>Buyer</option>
              <option value={"Seller"}>Seller</option>
            </select>

            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.userType?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email is must",
              })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "password is required ",
                minLength: {
                  value: 6,
                  message: "password must be 6 character",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "password must be one Uppercase one symbol and one number",
                },
              })}
              type="text"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />

            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text-alt">Forget password</span>
            </label>
          </div>

          <p className="text-center">
            <input className=" btn btn-primary w-1/2" type="submit" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
