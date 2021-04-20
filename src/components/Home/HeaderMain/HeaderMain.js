import React from 'react';
import water from '../../../images/drink-removebg-preview.png'


const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center pb-5">
              
            <div className="col-md-4 offset-1 ">
                <h4 className="text-warning">Water is nothing but life</h4>
                <h1 style={{color: '#3A4256'}}><span className="text-white">Pure Water</span><br/> Delivery Service</h1>
                <p className="text-white">We now deliver different types of bottled water. <br/> To drink the best water please come to us and give us an order and take safe and sound water for you. </p>
                <button className="btn btn-danger">Order Now</button>
            </div>
            <div className="col-md-6">
                <img style={{height:'500px'}} src={water} alt="" className="img-fluid ml-4"/>
            </div>
        </main>
    );
};

export default HeaderMain;