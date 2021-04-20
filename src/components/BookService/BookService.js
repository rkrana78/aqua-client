import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Navbar from '../Home/Navbar/Navbar';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import './BookService.css'

const BookService = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookService, setBookService] = useState({});
    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {
        fetch(`https://thawing-scrubland-61740.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setBookService(data))
    }, [id])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        setServiceData(data);
    };

    const handlePaymentSuccess = paymentId => {
        const orderData = {
            ...loggedInUser,
            email: loggedInUser.email,
            name: serviceData.name,
            userEmail: serviceData.email,
            phone: serviceData.phone,
            address: serviceData.address,
            service: serviceData.service,
            quantity: serviceData.quantity,
            payment: paymentId
           // info:serviceData
        };

        const url = `https://thawing-scrubland-61740.herokuapp.com/addOrder`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res =>
                alert("Thanks for your Order"))
    }
    return (
        <div>
            <div className="row">
                <div style={{ display: serviceData ? 'none' : 'block' }} className="form-container mt-5  ">
                    <h2 className="text-success mb-4" >Order Service: <span className="text-danger" name="service">{bookService.name}</span> </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control w-75" type="text" placeholder="enter service name" id="service" {...register("service", { required: true })} />
                        {errors.service && <span className="text-danger">This field is required</span>}
                        <br />
                        <input className="form-control w-75" type="text" placeholder="quantity" id="service" {...register("quantity", { required: true })} />
                        {errors.quantity && <span className="text-danger">This field is required</span>}
                        <br />
                        <input className="form-control w-75" type="text" placeholder="enter your name" id="name" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">This field is required</span>}
                        <br />
                        <input type="text" className="form-control w-75" placeholder="your email"   {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        <br />
                        <input type="text" className="form-control w-75" placeholder="phone number"   {...register("phone", { required: true })} />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                        <br />
                        <input type="text" className="form-control w-75" placeholder="address"   {...register("address", { required: true })} />
                        {errors.address && <span className="text-danger">This field is required</span>}
                        <br />
                        <input className="btn btn-info mt-2 px-4" type="submit" value="Order" />
                    </form>
                </div>
                <div className="w-75 m-auto pt-5 confirm-payment">
                    <div style={{ display: serviceData ? 'block' : 'none' }} >
                        <h4>Please Pay and confirm your order</h4>
                        <PaymentProcess handlePayment={handlePaymentSuccess}></PaymentProcess>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookService;