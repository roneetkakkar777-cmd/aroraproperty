import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/about/AboutHero';
import Story from '../components/about/Story';
import MissionVision from '../components/about/MissionVision';
import Stats from '../components/about/Stats';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Aroras Properties</title>
                <meta name="description" content="Learn more about Aroras Properties, your trusted real estate partner in Ghaziabad. We build legacies, not just homes." />
            </Helmet>
            <main>
                <AboutHero />
                <Story />
                <Stats />
                <MissionVision />
            </main>
        </>
    );
};

export default About;
