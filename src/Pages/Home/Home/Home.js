import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner></Banner>
            <Services />
            <About />
            <Gallery />
            <Testimonials />
            <Footer />

        </div>
    );
};

export default Home;