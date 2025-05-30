import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = window.location.pathname;

    return (
        <nav className="bg-white shadow relative z-50">
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <a href="/"><img src="https://nellie-theme.myshopify.com/cdn/shop/files/footer-logo_bc8a733f-f892-4297-b39d-668aea97a225_400x@2x.png?v=1615322304" className="h-10" /></a>
                </div>
                <button className="lg:hidden text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
                </button>
                <ul className={`lg:flex gap-16 text-base items-center font-semibold absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <a href="/"><li className={`${currentPath === '/' ? 'text-red-400' : 'text-black'} cursor-pointer py-2 hover:text-red-500 duration-500`}>Home</li></a>
                    <a href="/aboutus"><li className={`${currentPath === '/aboutus' ? 'text-red-400' : 'text-black'} cursor-pointer py-2 hover:text-red-500 duration-500`}>About Us</li></a>
                    <li className="relative group">
                        <a href="/catalog">
                            <div className={`${currentPath === "/catalog" ? "text-red-400" : "text-black"} cursor-pointer py-2 hover:text-red-500 duration-500`}>Catalog <i class="bi bi-chevron-down ps-1 text-xs"></i></div>
                        </a>
                        <div className="absolute left-96 transform -translate-x-3/4 top-8 mt-2 bg-white shadow-lg border-gray-200 hidden group-hover:flex w-[1300px]">
                            <div className="grid grid-cols-4 gap-10 p-6 w-full text-center">
                                <div>
                                    <a href="/nailpolish" className="hover:text-red-500 duration-500 text-lg font-semibold pb-4">Nail Polish</a>
                                    <img src="https://nellie-theme.myshopify.com/cdn/shop/files/Product4_7f5e0f05-b45d-478c-9478-633bd9151956.jpg?v=1632138633" className="w-80 h-80" />
                                </div>
                                <div>
                                    <a href="/artificialnails" className="hover:text-red-500 duration-500 text-lg font-semibold pb-4">Artificial Nails</a>
                                    <img src="https://nellie-theme.myshopify.com/cdn/shop/files/Product6_9e659a18-7e00-4ee7-a2d9-7e3cdd25b395.jpg?v=1632138625" className="w-80 h-80" />
                                </div>
                                <div>
                                    <a href="/glossynails" className="hover:text-red-500 duration-500 text-lg font-semibold pb-4">Glossy Nails</a>
                                    <img src="https://nellie-theme.myshopify.com/cdn/shop/files/Product13_663b06db-46ae-486c-81b6-29103af037e8.jpg?v=1632138651" className="w-80 h-80" />
                                </div>
                                <div>
                                    <a href="/manicureset" className="hover:text-red-500 duration-500 text-lg font-semibold pb-4">Manicure Set</a>
                                    <img src="https://nellie-theme.myshopify.com/cdn/shop/files/Product15.jpg?v=1632138642" className="w-80 h-80" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="relative group">
                        <a href="/glossynails">
                            <div className={`${currentPath === "/glossynails" ? "text-red-400" : "text-black"} cursor-pointer py-2 hover:text-red-500 duration-500`}>Shop <i class="bi bi-chevron-down ps-1 text-xs"></i></div>
                        </a>
                        <div className="absolute left-64 transform -translate-x-3/4 top-8 mt-2 bg-white shadow-lg border-gray-200 hidden group-hover:flex w-[1300px]">
                            <div className="grid grid-cols-4 gap-6 p-10">
                                <div className="col-span-1">
                                    <img src="https://nellie-theme.myshopify.com/cdn/shop/files/Nellie_Mega_Menu_-_1_ca998a42-0a72-46be-8717-f6c849b30b48.png?v=1614331577" alt="Jasmine Nailpolish" className="w-full h-full rounded" />
                                </div>
                                <div>
                                    <h3 className="pb-4">Nail Polish</h3>
                                    <ul className="space-y-2 text-gray-500">
                                        <li><a href="/curated" className="hover:text-red-500 duration-500">Curated</a></li>
                                        <li><a href="/dime" className="hover:text-red-500 duration-500">Dime</a></li>
                                        <li><a href="/foxy" className="hover:text-red-500 duration-500">Foxy</a></li>
                                        <li><a href="/naildelights" className="hover:text-red-500 duration-500">Nail Delights</a></li>
                                        <li><a href="/nautical" className="hover:text-red-500 duration-500">Nautical</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="pb-4">Nail Decoration</h3>
                                    <ul className="space-y-2 text-gray-500">
                                        <li><a href="/allurenails" className="hover:text-red-500 duration-500">Allure Nails</a></li>
                                        <li><a href="/allureglossynails" className="hover:text-red-500 duration-500">Allure Glossy Nails</a></li>
                                        <li><a href="/envyglossynails" className="hover:text-red-500 duration-500">Envy Glossy Nails</a></li>
                                        <li><a href="/splashglossynails" className="hover:text-red-500 duration-500">Splash Glossy Nails</a></li>
                                        <li><a href="/mattefinishnails" className="hover:text-red-500 duration-500">Matte Finish Nails</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="pb-4">Nail Care Tools</h3>
                                    <ul className="space-y-2 text-gray-500">
                                        <li><a href="/daintynailbrush" className="hover:text-red-500 duration-500">Dainty Nail Brush</a></li>
                                        <li><a href="/aliyanailfile" className="hover:text-red-500 duration-500">Aliya Nail File</a></li>
                                        <li><a href="#" className="hover:text-red-500 duration-500">Cuticle Pusher</a></li>
                                        <li><a href="#" className="hover:text-red-500 duration-500">Cuticle Nipper</a></li>
                                        <li><a href="#" className="hover:text-red-500 duration-500">Nail Buffer</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <a href="/blog"><li className={`${currentPath === '/blog' ? 'text-red-400' : 'text-black'} cursor-pointer py-2 hover:text-red-500 duration-500`}>Blog</li></a>
                    <li className="relative group">
                        <a href="#">
                            <div className={`${currentPath === "/#" ? "text-red-400" : "text-black"} cursor-pointer py-2 hover:text-red-500 duration-500`}>Pages <i class="bi bi-chevron-down ps-1 text-xs"></i></div>
                        </a>
                        <div className="absolute left-0 w-48 bg-white border border-gray-200 shadow-lg z-50 hidden group-hover:block">
                            <a href="/services" className="block px-4 py-3 text-sm text-gray-700 hover:text-red-500 duration-500">
                                Services
                            </a>
                            <a href="/faq" className="block px-4 py-3 text-sm text-gray-700 hover:text-red-500 duration-500">
                                Faq
                            </a>
                            <a href="/contact" className="block px-4 py-3 text-sm text-gray-700 hover:text-red-500 duration-500">
                                Contact
                            </a>
                        </div>
                    </li>
                </ul>
                <div className="gap-6 grid grid-cols-4 items-center text-black text-xl">
                    <a href="/search"><i className="bi bi-search"></i></a>
                    <a href="/"><i className="bi bi-cart3"></i></a>
                    <a href="/account"><i className="bi bi-person"></i></a>
                    <a href="/"><i className="bi bi-heart"></i></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;