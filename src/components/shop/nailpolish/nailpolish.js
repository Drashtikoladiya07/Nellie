import React, { useState } from 'react';
import { Heart, ShoppingCart, Copy } from "lucide-react";
import 'swiper/css';
import 'swiper/css/navigation';
import Sidebar from '../sidebar';

const catalog = [
    { link: 'foxy', id: 1, name: 'Foxy', price: "21,577.55", oldPrice: "34,662.74", about: 'Aliquet tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product5_600x.jpg?v=1600246227', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product4_600x.jpg?v=1600241498' },
    { link: 'nautical', id: 2, name: 'Nautical', price: "22,444.12", oldPrice: "34,662.74", about: 'Ipsum tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product3_f4a0fa87-ab4a-4350-8011-cdf7a18cb5a2_600x.jpg?v=1600246226', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product1_600x.jpg?v=1600241497' },
    { link: 'dime', id: 3, name: 'Dime', price: "24,177.26", oldPrice: "34,662.74", about: 'Kerum tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product4_600x.jpg?v=1600241498', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product2_534f80b2-3de0-412f-8098-469b2257a316_600x.jpg?v=1600242077' },
    { link: 'curated', id: 4, name: 'Curated', price: "23,310.69", oldPrice: "34,662.74", about: 'Rures tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product1_600x.jpg?v=1600241497', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product3_f4a0fa87-ab4a-4350-8011-cdf7a18cb5a2_600x.jpg?v=1600246226' },
    { link: 'naildelights', id: 5, name: 'Nail Delights', price: "66,639.11", oldPrice: "34,662.74", about: 'Rewutm tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product2_534f80b2-3de0-412f-8098-469b2257a316_600x.jpg?v=1600242077', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product5_600x.jpg?v=1600246227' },
];

function Nailpolish() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <div className="bg-red-50 py-20">
                <h1 className="text-4xl text-center tracking-wider font-serif">COLLECTION</h1>
                <h1 className="text-md tracking-widest text-center py-5"><a href="#">Home </a> /  <a href="#"> Nail Polish</a></h1>
            </div>
            <div className="flex lg:px-20 py-20">
                <Sidebar />
                <div className="flex-1 py-6">
                    <button
                        className="md:hidden flex-none text-2xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className="bi bi-list"></i>
                    </button>
                    <div className={`md:flex lg:flex px-5 md:flex-none bg-gray-50 sm:flex-none justify-between items-center py-4  ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <div className="flex justify-between gap-4 items-center">
                            <button className="border p-2"><i className="bi bi-grid"></i></button>
                            <label className="flex items-center gap-2 text-sm">Paginate by
                                <select
                                    className="border px-2 py-1 rounded"
                                >
                                    <option className='hover:bg-red-400' value={3}>3</option>
                                    <option className='hover:bg-red-400' value={6}>6</option>
                                    <option className='hover:bg-red-400' value={9}>9</option>
                                    <option className='hover:bg-red-400' value={12}>12</option>
                                    <option className='hover:bg-red-400' value={15}>15</option>
                                    <option className='hover:bg-red-400' value={18}>18</option>
                                    <option className='hover:bg-red-400' value={21}>21</option>
                                </select>
                            </label>
                        </div>
                        <div className="text-sm">Sort by
                            <select className="ml-2 border px-2 py-1 rounded">
                                <option className='hover:bg-red-400'>Featured</option>
                                <option className='hover:bg-red-400'>Best Selling</option>
                                <option className='hover:bg-red-400'>Alphabetically, A-Z</option>
                                <option className='hover:bg-red-400'>Alphabetically, Z-A</option>
                                <option className='hover:bg-red-400'>Price: Low to High</option>
                                <option className='hover:bg-red-400'>Price: High to Low</option>
                                <option className='hover:bg-red-400'>Date, old to new</option>
                                <option className='hover:bg-red-400'>Date, new to old</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-3">
                        {catalog.map((item, index) => (
                            <div key={index}  >
                                <a href={item.link}>
                                    <div className="group relative p-4 text-center hover:shadow transition group">
                                        <div className="absolute top-2 p-3 right-2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 z-10">
                                            <button className="bg-white p-3 rounded-full shadow hover:bg-red-400 hover:text-white duration-500">
                                                <Heart size={18} />
                                            </button>
                                            <button className="bg-white p-3 rounded-full shadow hover:bg-red-400 hover:text-white duration-500">
                                                <ShoppingCart size={18} />
                                            </button>
                                            <button className="bg-white p-3 rounded-full shadow hover:bg-red-400 hover:text-white duration-500">
                                                <Copy size={18} />
                                            </button>
                                        </div>
                                        <div className="relative w-56 h-96 mx-auto">
                                            <img src={item.img} className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                                            <img src={item.hoverImg} className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                                        </div>
                                        <h2 className="pt-4 font-serif tracking-wider group-hover:text-red-400">{item.name}</h2>
                                        <div className="flex justify-center py-2">
                                            <p className="text-xl font-semibold text-black">Rs. {item.price}</p>
                                            <p className="line-through pt-1 px-2 text-gray-400">Rs. {item.oldPrice}</p>
                                        </div>
                                        <p className="text-sm text-gray-400">{item.about}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nailpolish;