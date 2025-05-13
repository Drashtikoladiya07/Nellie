import React from "react";
import { Heart, ShoppingCart, Copy } from "lucide-react";

function Nailcard() {

    const nails = [
        {
            id: 'allureglossynails',
            name: "Allure Glossy Nails",
            about: "Orci tempus turpls...",
            image: "https://nellie-theme.myshopify.com/cdn/shop/products/Product10_2000x.jpg?v=1600247899",
            hoverImage: "https://nellie-theme.myshopify.com/cdn/shop/products/Product12_600x.jpg?v=1600247899",
        },
        {
            id: 'envyglossynails',
            name: "Envy Glossy Nails",
            about: "Lorem tempus turpls...",
            image: "https://nellie-theme.myshopify.com/cdn/shop/products/Product11_e5532f0f-8583-40db-8afd-544ee1e860b0_2000x.jpg?v=1600248032",
            hoverImage: "https://nellie-theme.myshopify.com/cdn/shop/products/Product13_600x.jpg?v=1600248032",
        },
        {
            id: 'splashglossynails',
            name: "Splash Glossy Nails",
            about: "Dteum tempus turpls...",
            image: "https://nellie-theme.myshopify.com/cdn/shop/products/Product12_600x.jpg?v=1600247899",
            hoverImage: "https://nellie-theme.myshopify.com/cdn/shop/products/Product10_2000x.jpg?v=1600247899",
        },
        {
            id: 'daintyglossynails',
            name: "Dainty Glossy Nails",
            about: "Persus tempus turpls...",
            image: "https://nellie-theme.myshopify.com/cdn/shop/products/Product13_600x.jpg?v=1600248032",
            hoverImage: "https://nellie-theme.myshopify.com/cdn/shop/products/Product11_e5532f0f-8583-40db-8afd-544ee1e860b0_2000x.jpg?v=1600248032",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 py-5">
            {nails.map((item, index) => (
                <div key={index} >
                    <a href={item.id}>
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
                            <div className="relative w-60 h-80 mx-auto pb-4">
                                <img src={item.image} className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                                <img src={item.hoverImage} className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                            </div>
                            <h2 className="pt-4 font-serif tracking-wider">{item.name}</h2>
                            <div className="flex justify-center py-2">
                                <p className="text-xl font-semibold text-black">Rs. 29,293.37</p>
                                <p className="line-through pt-1 px-2 text-gray-400">Rs. 34,564.44</p>
                            </div>
                            <p className="text-sm text-gray-400">{item.about}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Nailcard;
