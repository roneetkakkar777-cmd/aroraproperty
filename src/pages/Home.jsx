import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import StatsPreview from '../components/home/StatsPreview';
import About from '../components/home/About';
import FeaturedProperties from '../components/home/FeaturedProperties';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import HomeContactCTA from '../components/home/HomeContactCTA';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Aroras Properties | Premium Real Estate Consultant in Ghaziabad</title>
                <meta name="description" content="Find your dream property in Raj Nagar Extension, Ghaziabad with Aroras Properties. Trusted real estate consultants for buying, selling, and renting premium properties." />
                <meta name="keywords" content="Real Estate Ghaziabad, Raj Nagar Extension Property, Buy Flat Ghaziabad, Property Consultant, Aroras Properties" />
            </Helmet>

            <main>
                <Hero />
                <StatsPreview />
                <About />
                <FeaturedProperties />
                <Services />
                <Testimonials />
                <HomeContactCTA />
            </main>
        </>
    );
};

export default Home;
