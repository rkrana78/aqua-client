import React from 'react';

const InfoCard = (props) => {
    const {title, img} = props.info;
    return (
        <div>         
            <div className="col-md-3 mr-4 ">
                <img style={{height: '130px'}} src={img} alt=""/>
                <h6 className="d-flex align-items-center mt-3 ml-4 pl-1">{title}</h6>
            </div>
        </div>
    );
};

export default InfoCard;