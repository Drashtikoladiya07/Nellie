import React from "react";

const nailArts = [
    "https://nellie-theme.myshopify.com/cdn/shop/files/img-6_180x.jpg?v=1614306862",
    "https://nellie-theme.myshopify.com/cdn/shop/files/img-6_180x.jpg?v=1614306862",
    "https://nellie-theme.myshopify.com/cdn/shop/files/img-6_180x.jpg?v=1614306862",
    "https://nellie-theme.myshopify.com/cdn/shop/files/img-6_180x.jpg?v=1614306862",
    "https://nellie-theme.myshopify.com/cdn/shop/files/img-6_180x.jpg?v=1614306862",
    "https://nellie-theme.myshopify.com/cdn/shop/files/img-6_180x.jpg?v=1614306862",
    "https://nellie-theme.myshopify.com/cdn/shop/files/img-6_180x.jpg?v=1614306862",
    "https://nellie-theme.myshopify.com/cdn/shop/files/img-6_180x.jpg?v=1614306862",
];

export default function Nailgallery() {
    return (
        <div className="bg-pink-50 min-h-screen py-10 px-5">
            <div className="text-center mb-10">
                <p className="text-sm uppercase tracking-widest text-gray-500">@YourInstagram</p>
                <h1 className="text-2xl font-bold text-gray-700">#Nail Arts</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {nailArts.map((url, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg group"
                    >
                        <img
                            src={url}
                            alt={`Nail art ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-red-400 bg-opacity-0 group-hover:bg-opacity-60 transition-colors duration-700 ease-in-out origin-top-left">
                            <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-700 ease-in-out origin-top-left">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-10 h-10 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.278 2.76 7.9 6.65 9.235.486.09.665-.21.665-.465 0-.23-.008-.84-.013-1.648-2.703.587-3.273-1.304-3.273-1.304-.443-1.125-1.083-1.426-1.083-1.426-.886-.605.067-.592.067-.592 1.005.071 1.534 1.032 1.534 1.032.87 1.49 2.28 1.06 2.835.81.09-.63.34-1.06.618-1.304-2.16-.246-4.433-1.08-4.433-4.805 0-1.06.375-1.926.99-2.605-.099-.246-.429-1.24.093-2.59 0 0 .81-.26 2.655 1.002A9.26 9.26 0 0112 6.82c.819.004 1.643.111 2.415.326 1.845-1.262 2.655-1.002 2.655-1.002.522 1.35.192 2.344.093 2.59.615.679.99 1.545.99 2.605 0 3.734-2.28 4.554-4.455 4.796.348.3.66.891.66 1.795 0 1.296-.012 2.34-.012 2.658 0 .258.174.558.67.463C19.99 19.894 22.75 16.274 22.75 12c0-5.385-4.365-9.75-9.75-9.75z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
