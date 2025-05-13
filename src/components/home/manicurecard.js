import React from "react";
import { Heart, ShoppingCart, Copy } from "lucide-react";

function Manicurecard() {

    const nails = [
        {
            id: 'dime',
            name: "Dime",
            about: "Kerum tempus turpls...",
            price: "Rs. 24,201.30",
            oldprice: "Rs. 34.697.21",
            image: "https://nellie-theme.myshopify.com/cdn/shop/products/Product3_f4a0fa87-ab4a-4350-8011-cdf7a18cb5a2_600x.jpg?v=1600246226",
            hoverImage: "https://nellie-theme.myshopify.com/cdn/shop/products/Product5_600x.jpg?v=1600246227",
        },
        {
            id: 'daintynailbrush',
            name: "Dainty Nail Brush",
            about: "Eurem tempus turpls...",
            price: "Rs. 33,743.03",
            oldprice: "Rs. 34,697.21",
            image: "https://nellie-theme.myshopify.com/cdn/shop/products/Product14_600x.jpg?v=1600248487",
            hoverImage: "https://nellie-theme.myshopify.com/cdn/shop/products/Product14_600x.jpg?v=1600248487",
        },
        {
            id: 'curated',
            name: "Curated",
            about: "Rures tempus turpls...",
            price: "Rs. 23,333.87",
            oldprice: "Rs. 34,697.21",
            image: "https://nellie-theme.myshopify.com/cdn/shop/products/Product2_534f80b2-3de0-412f-8098-469b2257a316_600x.jpg?v=1600242077",
            hoverImage: "https://nellie-theme.myshopify.com/cdn/shop/products/Product4_7f5e0f05-b45d-478c-9478-633bd9151956_600x.jpg?v=1600242077",
        },
        {
            id: 'aliyanailfile',
            name: "Aliya Nail File",
            about: "Nam tempus turpls...",
            price: "Rs. 32,875.60",
            oldprice: "Rs. 34,697.21",
            image: "https://nellie-theme.myshopify.com/cdn/shop/products/Product15_600x.jpg?v=1600248596",
            hoverImage: "https://nellie-theme.myshopify.com/cdn/shop/products/Product15_600x.jpg?v=1600248596",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 py-10">
            {nails.map((item, index) => (
                <div key={index}  >
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
                                <p className="text-xl font-semibold text-black">{item.price}</p>
                                <p className="line-through pt-1 px-2 text-gray-400">{item.oldprice}</p>
                            </div>
                            <p className="text-sm text-gray-400">{item.about}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Manicurecard;
