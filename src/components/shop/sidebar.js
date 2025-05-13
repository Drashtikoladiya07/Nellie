import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useState } from "react";

function Sidebar() {
    const products = [
        { id: 'dime', name: 'Dime', price: '24,239.25', originalPrice: '34,662.74', image: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product3_f4a0fa87-ab4a-4350-8011-cdf7a18cb5a2_600x.jpg?v=1600246226', hoverImage: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product5_600x.jpg?v=1600246227' },
        { id: 'daintynailbrush', name: 'Dainty Nail Brush', price: '33,795.94', originalPrice: '34,662.74', image: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product14_600x.jpg?v=1600248487', hoverImage: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product14_600x.jpg?v=1600248487' },
        { id: 'curated', name: 'Curated', price: '23,370.46', originalPrice: '34,662.74', image: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product2_534f80b2-3de0-412f-8098-469b2257a316_600x.jpg?v=1600242077', hoverImage: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product4_7f5e0f05-b45d-478c-9478-633bd9151956_600x.jpg?v=1600242077' },
        { id: 'aliyanailfile', name: 'Aliya Nail File', price: '32,927.15', originalPrice: '34,662.74', image: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product15_600x.jpg?v=1600248596', hoverImage: 'https://nellie-theme.myshopify.com/cdn/shop/products/Product15_600x.jpg?v=1600248596' },
    ];
    const [openMenu, setOpenMenu] = useState("");

    const handleToggle = (menu) => {
        if (openMenu === menu) {
            setOpenMenu("");
        } else {
            setOpenMenu(menu);
        }
    };
    return (
        <div>
            <div className="w-64 space-y-6 text-sm hidden md:block">
                <div>
                    <h2 className="font-semibold pb-2 border-b text-xl">Category</h2>
                    <div className="space-y-4 pt-4">
                        <div className="pb-2">
                            <button onClick={() => handleToggle("Nail Care Tools")} className="flex justify-between w-full font-semibold text-left">
                                <span className={`${openMenu === "Nail Care Tools" ? "text-red-400" : "text-black"}`}>Nail Care Tools</span>
                                <i className={`bi ${openMenu === "Nail Care Tools" ? "bi-dash" : "bi-plus"}`}></i>
                            </button>
                            {openMenu === "Nail Care Tools" && (
                                <ul className="pl-5 pt-2 list-disc text-black">
                                    <a href="/aliyanailfile" className="hover:text-red-400 duration-500"><li>Aliya Nail File</li></a>
                                    <a href="/daintynailbrush" className="hover:text-red-400 duration-500"><li>Dainty Nail Brush</li></a>
                                </ul>
                            )}
                        </div>
                        <div className="pb-2">
                            <button onClick={() => handleToggle("Nail Decoration")} className="flex justify-between w-full font-semibold text-left">
                                <span className={`${openMenu === "Nail Decoration" ? "text-red-400" : "text-black"}`}>Nail Decoration</span>
                                <i className={`bi ${openMenu === "Nail Decoration" ? "bi-dash" : "bi-plus"}`}></i>
                            </button>
                            {openMenu === "Nail Decoration" && (
                                <ul className="pl-5 pt-2 list-disc text-black">
                                    <a href="/allureglossynails" className="hover:text-red-400 duration-500"><li>Allure Glossy Nails</li></a>
                                    <a href="/allurenails" className="hover:text-red-400 duration-500"><li>Allure Nails</li></a>
                                </ul>
                            )}
                        </div>
                        <div className="pb-2">
                            <button onClick={() => handleToggle("Nail Polish")} className="flex justify-between w-full font-semibold text-left">
                                <span className={`${openMenu === "Nail Polish" ? "text-red-400" : "text-black"}`}>Nail Polish</span>
                                <i className={`bi ${openMenu === "Nail Polish" ? "bi-dash" : "bi-plus"}`}></i>
                            </button>
                            {openMenu === "Nail Polish" && (
                                <ul className="pl-5 pt-2 list-disc text-black">
                                    <a href="/curated" className="hover:text-red-400 duration-500"><li>Curated</li></a>
                                    <a href="/dime" className="hover:text-red-400 duration-500"><li>Dime</li></a>
                                </ul>
                            )}
                        </div>

                    </div>
                </div>
                <div>
                    <h2 className="font-semibold pb-2 border-b text-xl">Availability</h2>
                    <label className="block pt-3"><input type="radio" name="availability" /> In stock (4)</label>
                    <label className="block py-2"><input type="radio" name="availability" /> Out of stock (0)</label>
                    <div className="flex gap-2 mt-2">
                        <button className="bg-red-300 hover:bg-black duration-500 text-white px-4 py-2 rounded-full">Clear</button>
                        <button className="bg-red-400 hover:bg-black duration-500 text-white px-4 py-2 rounded-full">Apply</button>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold pb-2 border-b text-xl">Color</h2>
                    {['Lavender', 'red', 'Pink', 'Violet'].map((color, i) => (
                        <label key={i} className="block py-2"><input type="radio" name="color" /> {color}</label>
                    ))}
                    <div className="flex gap-2 mt-2">
                        <button className="bg-red-300 hover:bg-black duration-500 text-white px-4 py-2 rounded-full">Clear</button>
                        <button className="bg-red-400 hover:bg-black duration-500 text-white px-4 py-2 rounded-full">Apply</button>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold pb-2 border-b text-xl">Brand</h2>
                    {['Dazzle Nails', 'Regal Nails'].map((brand, i) => (
                        <label key={i} className="block py-2"><input type="radio" name="brand" /> {brand}</label>
                    ))}
                    <div className="flex gap-2 mt-2">
                        <button className="bg-red-300 hover:bg-black duration-500 text-white px-4 py-2 rounded-full">Clear</button>
                        <button className="bg-red-400 hover:bg-black duration-500 text-white px-4 py-2 rounded-full">Apply</button>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold pb-2 border-b text-xl">Product Type</h2>
                    {['Manicure Tool', 'Nail Brush', 'Nail Polish'].map((type, i) => (
                        <label key={i} className="block py-2"><input type="radio" name="type" /> {type}</label>
                    ))}
                    <div className="flex gap-2 mt-2">
                        <button className="bg-red-300 hover:bg-black duration-500 text-white px-4 py-2 rounded-full">Clear</button>
                        <button className="bg-red-400 hover:bg-black duration-500 text-white px-4 py-2 rounded-full">Apply</button>
                    </div>
                </div>
                <button className="w-full bg-red-400 text-white hover:bg-black duration-500 py-2 rounded-full">Clear All</button>
                <div>
                    <h2 className="font-semibold pb-2 border-b text-xl">Best Sellers</h2>
                    <div className="w-full max-w-xs mx-auto">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            navigation={{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }} autoplay={{ delay: 3000, disableOnInteraction: false }}>
                            {products.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <div className="text-center">
                                        <a href={product.id}>
                                            <div className="relative group mx-auto">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-contain transition-opacity duration-400 hover:bg-black duration-500 group-hover:opacity-0" />
                                                <img src={product.hoverImage} alt={product.name + ' hover'} className="w-full h-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 hover:bg-black duration-500" />
                                            </div>
                                        </a>
                                        <h3 className="text-orange-400 font-semibold mt-4">{product.name}</h3>
                                        <p className="text-lg font-medium mt-1">Rs. {product.price}</p>
                                        <p className="text-sm text-gray-400 line-through">Rs. {product.originalPrice}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 px-2 bg-red-400 hover:bg4blac2 rounded-full-full shadow text-white text-sm cursor-pointer">
                                <i className="bi bi-chevron-left"></i>
                            </div>
                            <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 px-2 bg-red-400 hover:bg4blac2 rounded-full-full shadow text-white text-sm cursor-pointer">
                                <i className="bi bi-chevron-right"></i>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;