import React from 'react';
import './Certification.css'
import lab from '../../../images/micrscope-removebg-preview.png'
import glass from '../../../images/glass-icon-removebg-preview.png'
import mineral from '../../../images/medicine-icon-removebg-preview.png'
import certificate from '../../../images/certificate-removebg-preview.png'
import InfoCard from '../InfoCard/InfoCard';


const CertificationInfo = [
    {
        title: 'Laboratory Control',
        img: lab
    },
    {
        title: 'Chlorine Free Water',
        img: glass
    },
    {
        title: 'Pure Mineralized Water',
        img: mineral
    },
    {
        title: 'Certificates Of Quality',
        img: certificate
    },
]

const Certification = () => {
    return (
        <section className="bg-light py-5 my-5 text-center" >
            <h4 className="text-success">Welcome To Aqua</h4>
            <h2 style={{ color: '#3A4256' }}>Most Trusted Company</h2>
            <p style={{fontFamily: 'roboto'}} className="w-50 m-auto py-5">Aqua Water Industries is pleased to introduce itself as a new entrant in the market for supply of revitalizing, refreshing, pure clean & healthy mineralized water.Water Brand bottle is great for drinking, cooking, activities, and even for children. The product is certified in 50 countries.</p>
           <div className="d-flex justify-content-center">
           <div className="row mt-5 pt-4 pb-5">
                {
                    CertificationInfo.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
           </div>
        </section>
    );
};

export default Certification;