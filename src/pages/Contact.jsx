import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactHero from '../components/contact/ContactHero';
import ContactContent from '../components/contact/ContactContent';
import FAQ from '../components/contact/FAQ';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Aroras Properties</title>
                <meta name="description" content="Get in touch with Aroras Properties for all your real estate needs. Visit our office in Raj Nagar Extension or call us today." />
            </Helmet>
            <main>
                <ContactHero />
                <ContactContent />
                <FAQ />
            </main>
        </>
    );
};

export default Contact;
