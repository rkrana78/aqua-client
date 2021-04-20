import React from 'react';
import About from '../About/About';
import Certification from '../Certification/Certification';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Testimonials/>
            <Certification/>
            <About/>
            <Footer/>
        </div>
    );
};

export default Home;