import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Properties', path: '/properties' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const closeMenu = () => {
        setIsOpen(false);
        window.scrollTo(0, 0); // Scroll to top on navigation
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" onClick={closeMenu} className={`text-2xl font-bold font-heading ${isScrolled || location.pathname !== '/' ? 'text-primary' : 'text-primary md:text-white'} drop-shadow-sm`}>
                        ARORAS <span className="text-secondary">PROPERTIES</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => window.scrollTo(0, 0)}
                                className={`text-sm font-medium transition-colors hover:text-secondary ${isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => window.scrollTo(0, 0)}
                            className="bg-secondary hover:bg-yellow-600 text-slate-500 hover:text-white px-5 py-2.5 rounded-md font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            <Phone size={18} />
                            Enquire Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`focus:outline-none ${isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-gray-800 md:text-white'}`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} className={isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-gray-800'} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 animate-fade-in border-t border-gray-100">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={closeMenu}
                                className="text-gray-800 hover:text-secondary font-medium py-2 border-b border-gray-50 last:border-0"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="bg-secondary text-white text-center py-3 rounded-md font-medium mt-2"
                        >
                            Enquire Now
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
