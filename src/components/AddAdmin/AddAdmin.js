import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const adminInfo = {
            name: data.name,
            email: data.email,
        };
        const url = `https://thawing-scrubland-61740.herokuapp.com/addAdmin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminInfo)
        })
            .then(res =>  alert('admin added successfully'))
    };

    return (
        <div className="container mt-5">
            <h3 className="text-success">Add Admin</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <label htmlFor="name"> Name</label>
            <br />
            <input type="text" className="form-control w-50" placeholder="name" id="name" {...register("name", { required: true })} />
            {errors.name && <span className="text-danger">This field is required</span>}
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" className="form-control w-50" id="email" {...register("email")} />
            {errors.name && <span className="text-danger">This field is required</span>}

            <input className="btn btn-info mt-3" type="submit" value="Add" />
        </form>
        </div>
    );
};

export default AddAdmin;