import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';


const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://thawing-scrubland-61740.herokuapp.com/orders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])
    return (
        <div>
            <div className="w-75 m-auto pt-5">

                <h4 className="text-success">Hi, {loggedInUser.name}</h4>
                <p>{loggedInUser.email}</p>
                <h6>Your Total Order is: {orders.length} </h6>
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Service</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr>
                                    <td><h6>{order.name}</h6></td>
                                    <td><h6>{order.service}</h6></td>
                                    <td><h6>{order.quantity}</h6></td>
                                    <td><h6>{order.phone}</h6></td>
                                    <td><h6>{order.address}</h6></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;

