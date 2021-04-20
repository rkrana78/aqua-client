import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageServices = () => {
    const [manageService, setManageService] = useState([]);

    useEffect(() => {
        fetch('https://thawing-scrubland-61740.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setManageService(data))
    })

    const handleDelete = (id) => {
        fetch(`https://thawing-scrubland-61740.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('deleted successfully');
            })
    }
    return (
        <div className="w-75 m-auto pt-5">
            <h2 className="text-success">Manage Services</h2>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Service</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageService.map(service =>
                            <tr>
                                <td><h6>{service.name}</h6></td>
                                <td><h6>{service.price}</h6></td>
                                <td><button className="btn btn-danger" onClick={() => handleDelete(service._id)} ><FontAwesomeIcon icon={faTrashAlt} /> Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageServices;
