import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddTestimonial.css'

const AddTestimonial = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [image, setImage] = useState([])


  const onSubmit = data => {
    const testimonialData = {
      name: data.name,
      quote: data.quote,
      from: data.from,
      image: image
    };

    const url = `https://thawing-scrubland-61740.herokuapp.com/addTestimonial`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(testimonialData)
    })
      .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'fdfe73af7a1143059fe937d40ab59952');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="form-container">
      <h2 className="text-success my-4">Give Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="testimonial-name"> Name</label>
        <br />
        <input className="form-control w-75" placeholder="enter name" id="testimonial-name" {...register("name", { required: true })} />
        {errors.name && <span className="text-danger">This field is required</span>}
        <br />
        <label htmlFor="testimonial-detail">Quote</label>
        <br />
        <input className="form-control w-75" id="testimonial-detail" {...register("quote")} />
        <label htmlFor="location">From</label>
        <br />
        <input className="form-control w-75" id="location" {...register("from")} />
        <br />
        <label htmlFor="testimonial-photo">Add Photo</label>
        <br />
        <input className="form-control w-75" id="testimonial-photo" type="file" onChange={handleImageUpload} />
        <br />
        <input className="btn btn-info mt-1 px-4" type="submit" />
      </form>
    </div>
  );
};

export default AddTestimonial;