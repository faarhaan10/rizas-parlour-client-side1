import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div id='home'>
            <Navigation />
            <Banner />
            <Services />
            <About />
            <Gallery />
            <Testimonials />
            <Contact />
            <Footer />

        </div>
    );
};

export default Home;