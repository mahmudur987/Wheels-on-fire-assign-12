import React from 'react';
import { useForm } from 'react-hook-form';

const AddAPProduct = () => {


    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);




    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    {...register("email", {
                        required: "Required",
                    })}
                />
                {errors.email && errors.email.message}

                <input
                    {...register("username", {
                        validate: value => value !== "admin" || "Nice try!"
                    })}
                />
                {errors.username && errors.username.message}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddAPProduct;