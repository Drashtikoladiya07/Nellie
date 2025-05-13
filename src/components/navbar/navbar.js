import React, { useState } from 'react';
import ShopDropdown from './shopdropdown';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = window.location.pathname;

    return (
        <nav className="bg-white shadow relative z-50">
            <div className="max-w-screen-xl mx-auto py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <a href="/"><img src="https://nellie-theme.myshopify.com/cdn/shop/files/footer-logo_bc8a733f-f892-4297-b39d-668aea97a225_400x@2x.png?v=1615322304" className="h-10" /></a>
                </div>
                <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}><i className="bi bi-list"></i></button>
                <ul className={`lg:flex gap-6 text-base items-center font-semibold absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <a href="/"><li className={`${currentPath === '/' ? 'text-red-400' : 'text-black'} cursor-pointer py-2`}>Home</li></a>
                    <a href="/aboutus"><li className={`${currentPath === '/aboutus' ? 'text-red-400' : 'text-black'} cursor-pointer py-2`}>About Us</li></a>
                    <a href="/catalog"><li className={`${currentPath === '/catalog' ? 'text-red-400' : 'text-black'} cursor-pointer py-2`}>Catalog -</li></a>
                    <a href='/glossynails'><li className={`${currentPath === '/shop' ? 'text-red-400' : 'text-black'} cursor-pointer py-2`}>Shop -</li></a>
                    <a href="/blog"><li className={`${currentPath === '/blog' ? 'text-red-400' : 'text-black'} cursor-pointer py-2`}>Blog</li></a>
                    <a href="/contact"><li className={`${currentPath === '/contact' ? 'text-red-400' : 'text-black'} cursor-pointer py-2`}>Pages -</li></a>
                    <div className="items-center text-black text-xl">
                        <a href="/search"><i className="bi bi-search px-2"></i></a>
                        <a href="/"><i className="bi bi-cart3 px-2"></i></a>
                        <a href="/account"><i className="bi bi-person px-2"></i></a>
                        <a href="/"><i className="bi bi-heart px-2"></i></a>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
