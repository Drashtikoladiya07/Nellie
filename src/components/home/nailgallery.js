import React from "react";

const nailArts = [
    "https://nellie-theme.myshopify.com/cdn/shop/files/img-5_770x.jpg?v=1614306862",
    "https://nellie-theme.myshopify.com/cdn/shop/files/img-6_770x.jpg?v=1614306862",
    "https://nellie-theme.myshopify.com/cdn/shop/files/img-7_770x.jpg?v=1614306862",
    "https://nellie-theme.myshopify.com/cdn/shop/files/img-8_770x.jpg?v=1614306862",
    "https://nellie-theme.myshopify.com/cdn/shop/files/Nellie_4_770x.jpg?v=1615322304",
    "https://nellie-theme.myshopify.com/cdn/shop/files/Nellie_3_770x.jpg?v=1615322304",
    "https://nellie-theme.myshopify.com/cdn/shop/files/Nellie_2_770x.jpg?v=1615322304",
    "https://nellie-theme.myshopify.com/cdn/shop/files/Nellie_1_770x.jpg?v=1615322304",
];

function Nailgallery() {
    return (
        <div className="bg-pink-50 min-h-screen py-20 lg:px-16">
            <div className="text-start flex mb-10 uppercase">
                <p className="px-5">@YourInstagram</p>|
                <h1 className="font-bold text-gray-700 px-5">#Nail Arts</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {nailArts.map((url, index) => (
                    <a href="https://www.instagram.com/wedesignthemesdesigners/">
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img src={url} alt={`Nail art ${index + 1}`} className="w-full h-full transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-red-400 bg-opacity-0 group-hover:bg-opacity-60 transition duration-500 flex items-center justify-center">
                                <i className="bi bi-instagram text-white text-4xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500 ease-in-out"></i>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Nailgallery;