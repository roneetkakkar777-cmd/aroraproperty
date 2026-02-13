import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeInUp, StaggerContainer, StaggerItem } from '../common/Motion';
import hero from '../../assets/images/hero.png'

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={hero}
                    alt="Modern Real Estate"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-4 text-center">
                <StaggerContainer className="max-w-5xl mx-auto">
                    <StaggerItem>
                        <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 text-white border border-white/20 text-sm font-medium mb-8 backdrop-blur-md shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-green-400"></span>
                            Premium Real Estate Consultant
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight font-heading">
                            Discover Your <br />
                            <span className="bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
                                Perfect Sanctuary
                            </span>
                        </h1>
                    </StaggerItem>

                    <StaggerItem>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                            Experience the finest properties in Ghaziabad and Raj Nagar Extension. We turn your dream of a perfect home into reality with trust and transparency.
                        </p>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/properties"
                                className="btn-primary min-w-[200px] py-4 text-lg flex items-center justify-center gap-2 group shadow-xl shadow-primary/20"
                            >
                                Explore Properties
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-lg font-semibold transition-all min-w-[200px]"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce md:pb-10">
                <div className="flex flex-col items-center gap-2 text-white/50">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ChevronDown size={24} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
