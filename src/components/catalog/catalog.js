import React, { useState } from 'react';
import { Heart, ShoppingCart, Copy } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Sidebar from '../shop/sidebar';

const catalog = [
    { link: 'aliyanailfile' ,id: 1, name: 'Aliya Nail File', price: "32,885.68", oldPrice: "34,676.18", about: 'Nam tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product15_600x.jpg?v=1600248596', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product15_600x.jpg?v=1600248596' },
    { link: 'allureglossynails' ,id: 2, name: 'Allure Glossy Nails', price: "29,388.06", oldPrice: "34,676.18", about: 'Orci tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product10_600x.jpg?v=1600247899', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product12_600x.jpg?v=1600247899' },
    { link: 'allurenails' ,id: 3, name: 'Allure Nails', price: "20,719.02", oldPrice: "34,676.18", about: 'Perus tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product9_6a4f5ef7-7c67-4d4e-bf88-37fc5aba3e81_600x.jpg?v=1600247669', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product7_066ec19e-31fc-44a0-9591-0d5200de6023_600x.jpg?v=1600247670' },
    { link: 'curated' ,id: 4, name: 'Curated', price: "23,319.73", oldPrice: "34,676.18", about: 'Rures tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product2_534f80b2-3de0-412f-8098-469b2257a316_600x.jpg?v=1600242077', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product4_7f5e0f05-b45d-478c-9478-633bd9151956_600x.jpg?v=1600242077' },
    { link: 'daintyglossynails' ,id: 5, name: 'Dainty Glossy Nails', price: "29,388.06", oldPrice: "34,676.18", about: 'Persus tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product13_663b06db-46ae-486c-81b6-29103af037e8_600x.jpg?v=1600248313', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product12_8ebe88ff-7729-40f2-827c-68b12b1fa79e_600x.jpg?v=1600248312' },
    { link: 'daintynailbrush' ,id: 6, name: 'Dainty Nail Brush', price: "33,722.58", oldPrice: "34,676.18", about: 'Eurem tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product14_600x.jpg?v=1600248487', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product14_600x.jpg?v=1600248487' },
    { link: 'dime' ,id: 7, name: 'Dime', price: "29,287.72", oldPrice: "24,186.63", about: 'Kerum tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product3_f4a0fa87-ab4a-4350-8011-cdf7a18cb5a2_600x.jpg?v=1600246226', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product5_600x.jpg?v=1600246227' },
    { link: 'envyglossynails' ,id: 8, name: 'Envy Glossy Nails', price: "29,388.06", oldPrice: "34,676.18", about: 'Lorem tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product11_e5532f0f-8583-40db-8afd-544ee1e860b0_600x.jpg?v=1600248032', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product12_600x.jpg?v=1600248032' },
    { link: 'foxy' ,id: 9, name: 'Foxy', price: "32,743.5", oldPrice: "21,585.92", about: 'Aliquet tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product5_600x.jpg?v=1600246227', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product3_f4a0fa87-ab4a-4350-8011-cdf7a18cb5a2_600x.jpg?v=1600246226' },
    { link: 'glitterfinishnails' ,id: 10, name: 'Glitter Finish Nails', price: "20,719.02", oldPrice: "34,676.18", about: 'Marques tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product8_600x.jpg?v=1600246855', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/files/Product6_9e659a18-7e00-4ee7-a2d9-7e3cdd25b395.jpg?v=1632138625' },
    { link: 'glossyfinishnails' ,id: 11, name: 'Glossy Finish Nails', price: "20,719.02", oldPrice: "34,676.18", about: 'Tirums tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product7_1c80f5a4-a4b4-4589-94c0-c99cf62bb969_600x.jpg?v=1600247209', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product9_600x.jpg?v=1600247209' },
    { link: 'mattefinishnails' ,id: 12, name: 'Matte Finish Nails', price: "21,585.92", oldPrice: "34,676.18", about: 'Goremu tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/files/Product6_9e659a18-7e00-4ee7-a2d9-7e3cdd25b395.jpg?v=1632138625', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product8_600x.jpg?v=1600246855' },
    { link: 'naildelights' ,id: 13, name: 'Nail Delights', price: "66,664.95", oldPrice: "34,676.18", about: 'Rewutm tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product1_600x.jpg?v=1600241497', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product3_f4a0fa87-ab4a-4350-8011-cdf7a18cb5a2_600x.jpg?v=1600246226' },
    { link: 'nautical' ,id: 14, name: 'Nautical', price: "22,452.82", oldPrice: "34,676.18", about: 'Ipsum tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product4_600x.jpg?v=1600241498', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product5_fdc96047-cf8c-491f-ac74-1be466570a83_600x.jpg?v=1600246505' },
    { link: 'splashglossynails' ,id: 15, name: 'Splash Glossy Nails', price: "29,388.06", oldPrice: "34,676.18", about: 'Dteum tempus turpis...', img: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product12_e5feb895-3e83-4ef0-9a89-29d94642b1bc_600x.jpg?v=1600248215', hoverImg: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product13_3c592833-2ca3-4d00-beec-d94a57d10217_600x.jpg?v=1600248216' },
];
const products = [
    { name: 'Dime', price: '24,239.25', originalPrice: '34,676.18', image: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product3_f4a0fa87-ab4a-4350-8011-cdf7a18cb5a2_600x.jpg?v=1600246226', hoverImage: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product5_600x.jpg?v=1600246227' },
    { name: 'Dainty Nail Brush', price: '33,795.94', originalPrice: '34,676.18', image: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product14_600x.jpg?v=1600248487', hoverImage: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product14_600x.jpg?v=1600248487' },
    { name: 'Curated', price: '23,370.46', originalPrice: '34,676.18', image: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product2_534f80b2-3de0-412f-8098-469b2257a316_600x.jpg?v=1600242077', hoverImage: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product4_7f5e0f05-b45d-478c-9478-633bd9151956_600x.jpg?v=1600242077' },
    { name: 'Aliya Nail File', price: '32,927.15', originalPrice: '34,676.18', image: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product15_600x.jpg?v=1600248596', hoverImage: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product15_600x.jpg?v=1600248596' },
];

const Catalog = () => {
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const totalPages = Math.ceil(catalog.length / itemsPerPage);
    const displayedProducts = catalog.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <div>
            <div className="bg-red-50 py-20">
                <h1 className="text-4xl text-center tracking-wider font-serif">COLLECTION</h1>
                <h1 className="text-md tracking-widest text-center py-5"><a href="/" className='hover:text-red-400'>Home </a> /  <a href="#"> Products</a></h1>
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
                                <select value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)); setPage(1); }} className="border px-2 py-1 rounded">
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
                        {displayedProducts.map((item, index) => (
                            <div key={index}  >
                                <a href={item.link}>
                                    <div className="group relative p-4 text-center hover:shadow transition">
                                        <div className="absolute top-2 p-3 right-2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 z-10">
                                            <button className="bg-white p-3 rounded-full shadow hover:bg-red-400 hover:text-white">
                                                <Heart size={18} />
                                            </button>
                                            <button className="bg-white p-3 rounded-full shadow hover:bg-red-400 hover:text-white">
                                                <ShoppingCart size={18} />
                                            </button>
                                            <button className="bg-white p-3 rounded-full shadow hover:bg-red-400 hover:text-white">
                                                <Copy size={18} />
                                            </button>
                                        </div>
                                        <div className="relative w-60 h-96 mx-auto pb-4">
                                            <img src={item.img} className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                                            <img src={item.hoverImg} className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                                        </div>
                                        <h2 className="pt-4 font-serif tracking-wider">{item.name}</h2>
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
                    <div className="mt-10 flex justify-center items-center space-x-4">
                        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1} className="w-8 h-8 flex items-center justify-center rounded-full bg-red-400 hover:bg-black text-white duration-500 disabled:opacity-50"> <i class="bi bi-caret-left"></i></button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button key={index} onClick={() => setPage(index + 1)} className={`w-9 h-9 rounded-full flex items-center justify-center text-white duration-500 font-semibold text-lg ${page === index + 1 ? "bg-black" : "bg-red-400 hover:bg-black"}`}>{index + 1}</button>
                        ))}
                        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages} className="w-8 h-8 flex items-center justify-center rounded-full bg-red-400 hover:bg-black text-white duration-500 disabled:opacity-50"><i class="bi bi-caret-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;