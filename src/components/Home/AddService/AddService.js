import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState([]);

  const onSubmit = data => {
    const serviceData = {
      name: data.name,
      description: data.description,
      price: data.price,
      imageURL: imageURL
    };

    const url = `https://thawing-scrubland-61740.herokuapp.com/addService`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    })
      .then(res => alert('service added successfully'))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'fdfe73af7a1143059fe937d40ab59952');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="form-container">
      <h2 className="text-success my-4">Add Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="service-name">Service Name</label>
        <br />
        <input type="text" className="form-control w-75" placeholder="enter service" id="service-name" {...register("name", { required: true })} />
        {errors.name && <span className="text-danger">This field is required</span>}
        <br />
        <label htmlFor="service-detail">Description</label>
        <br />
        <input type="text" className="form-control w-75" id="service-detail" {...register("description")} />
        <br />
        <label htmlFor="service-price">Add Price</label>
        <br />
        <input type="text" className="form-control w-75" id="service-price" {...register("price")} />
        <br />
        <label htmlFor="service-photo">Add Photo</label>
        <br />
        <input className="form-control w-75" id="service-photo" type="file" onChange={handleImageUpload} />
        <br />
        <input className="btn btn-info mt-1 px-4" type="submit" />
      </form>
    </div>
  );
};

export default AddService;