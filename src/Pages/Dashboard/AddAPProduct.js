import React from 'react';
import { useForm } from 'react-hook-form';

const AddAPProduct = () => {


    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);




    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">  Details</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="text"
                        {...register("about", {
                            required: "Required",
                        })}
                    />
                    {errors.about && errors.about.message}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Phone</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="text"
                        {...register("phone", {
                            required: "Required",
                        })}
                    />
                    {errors.phone && errors.phone.message}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Phone</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="text"
                        {...register("phone", {
                            required: "Required",
                        })}
                    />
                    {errors.phone && errors.phone.message}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Using Duration</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="text"
                        {...register("usingDuration", {
                            required: "Required",
                        })}
                    />
                    {errors.usingDuration && errors.usingDuration.message}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Location</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="text"
                        {...register("location", {
                            required: "Required",
                        })}
                    />
                    {errors.location && errors.location.message}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Brand</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="text"
                        {...register("brand", {
                            required: "Required",
                        })}
                    />
                    {errors.brand && errors.brand.message}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> email</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="email"
                        {...register("email", {
                            required: "Required",
                        })}
                    />
                    {errors.email && errors.email.message}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Condition</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="text"
                        {...register("condition", {
                            required: "Required",
                        })}
                    />
                    {errors.condition && errors.condition.message}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Product Title</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="text"
                        {...register("productTitle", {
                            required: "Required",
                        })}
                    />
                    {errors.productTitle && errors.productTitle.message}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">User name</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="text"
                        {...register("userName", {
                            required: 'name is must'
                        })}
                    />
                    {errors.username && errors.userName.message}
                </div>








                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddAPProduct;