import React, { useState } from 'react';
import ShopDropdown from './shopdropdown';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow relative z-50">
            <div className="max-w-screen-xl mx-auto py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img
                        src="https://nellie-theme.myshopify.com/cdn/shop/files/footer-logo_bc8a733f-f892-4297-b39d-668aea97a225_400x@2x.png?v=1615322304"
                        alt="logo"
                        className="h-10"
                    />
                </div>
                <button
                    className="lg:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className="bi bi-list"></i>
                </button>
                <ul className={`lg:flex gap-6 text-base items-center font-semibold absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <li className="text-red-400 cursor-pointer py-2">Home</li>
                    <li className="hover:text-red-400 cursor-pointer py-2">About Us</li>
                    <li className="hover:text-red-400 cursor-pointer py-2">Catalog -</li>
                    <li className="relative">
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="hover:text-red-400 focus:outline-none py-2"
                        >
                            Shop -
                        </button>
                        {showDropdown && (
                            <div
                                onMouseLeave={() => setShowDropdown(false)}
                                className="absolute left-0 top-full"
                            >
                                <ShopDropdown />
                            </div>
                        )}
                    </li>
                    <li className="hover:text-red-400 cursor-pointer py-2">Blog</li>
                    <li className="hover:text-red-400 cursor-pointer py-2">Pages -</li>

                    <div className=" items-center text-black text-xl">
                        <i className="bi bi-search px-2"></i>
                        <i className="bi bi-cart3 px-2"></i>
                        <i className="bi bi-person px-2"></i>
                        <i className="bi bi-heart px-2"></i>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
