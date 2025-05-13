import React from "react";
import { useState, useEffect } from "react";

function Services() {
    const ourclients = [
        { image: "https://nellie-theme.myshopify.com/cdn/shop/files/client-1.png?v=1614307169" },
        { image: "https://nellie-theme.myshopify.com/cdn/shop/files/client-2.png?v=1614307169" },
        { image: "https://nellie-theme.myshopify.com/cdn/shop/files/client-3.png?v=1614307169" },
        { image: "https://nellie-theme.myshopify.com/cdn/shop/files/client-4.png?v=1614307169" },
        { image: "https://nellie-theme.myshopify.com/cdn/shop/files/client-5.png?v=1614307169" },
    ];
    const nailFeatures = [
        {
            title: 'Painting Nails',
            image: 'https://nellie-theme.myshopify.com/cdn/shop/files/ser04_1_100x.jpg?v=1634537419',
        },
        {
            title: 'Sponging Technique',
            image: 'https://nellie-theme.myshopify.com/cdn/shop/files/ser04_.._100x.jpg?v=1634537610', // Replace with your actual image paths
        },
        {
            title: 'Stamping Technique',
            image: 'https://nellie-theme.myshopify.com/cdn/shop/files/ser04_2_100x.jpg?v=1634537697',
        },
        {
            title: 'Taping Technique',
            image: 'https://nellie-theme.myshopify.com/cdn/shop/files/ser04_h_100x.jpg?v=1634548276',
        },
    ];
    const visibleCounts = 4;
    const totalSlides = Math.ceil(ourclients.length / visibleCounts);

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ourclients.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleItems = () => {
        let items = [];
        for (let i = 0; i < visibleCounts; i++) {
            items.push(ourclients[(index + i) % ourclients.length]);
        }
        return items;
    };
    const getVisibleItems2 = () => {
        let items = [];
        for (let i = 0; i < visibleCounts; i++) {
            items.push(ourclients[(index + i) % ourclients.length]);
        }
        return items;
    };
    return (
        <div>
            <div className="bg-red-50 py-20">
                <h1 className="text-4xl text-center tracking-wider font-serif">SERVICES</h1>
                <h1 className="text-md tracking-widest text-center py-5"><a href={'/'} className="hover:text-red-400">Home</a> / <a href="#">Services</a></h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center lg:px-16 px-0 py-20 bg-white">
                <div className="md:w-1/2 p-10 text-center md:text-center space-y-4">
                    <div className="flex justify-center md:justify-start">
                        <div className="bg-gray-100 rounded-full mx-auto">
                            <img src="https://cdn.shopify.com/s/files/1/0462/3361/6544/files/sev-icon-5.png?v=1614317686" />
                        </div>
                    </div>
                    <h2 className="text-2xl">It’s time to get trimmed with nails</h2>
                    <p className="text-gray-700 leading-relaxed sm:text-sm lg:text-lg md:text-lg">Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
                    <p className="text-gray-900">See more at:</p>
                </div>
                <div className="md:w-1/2">
                    <img src="https://nellie-theme.myshopify.com/cdn/shop/files/ser001_1400x.jpg?v=1634362738" />
                </div>
            </div>
            <div className="bg-red-50 py-20 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold">Nail Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-8xl mx-auto px-4">
                    {nailFeatures.map((item, index) => (
                        <div key={index} className="group py-5">
                            <div className="w-48 h-48 mx-auto flex items-center justify-center rounded-full border-2 border-red-300 bg-red-50 hover:scale-105 transition-transform duration-300 shadow-sm">
                                <img src={item.image} alt={item.title} className="w-28 h-28 rounded-full" />
                            </div>
                            <p className="mt-4 text-sm md:text-base font-medium group-hover:text-red-400 transition-colors">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-10 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-8 border-red-300 overflow-hidden w-full h-full">
                        <img src="https://nellie-theme.myshopify.com/cdn/shop/files/ser02_1_.._970x.jpg?v=1634623892" alt="Nail Treatment" className="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-125" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="border-8 border-red-300 overflow-hidden w-full h-full">
                            <img src="https://nellie-theme.myshopify.com/cdn/shop/files/ser003_edc14d69-5ab7-4e70-83b4-93f1a6ff8b64_970x.jpg?v=1634362098" alt="Nail Polish" className="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-125" />
                        </div>
                        <div className="border-8 border-red-300 overflow-hidden w-full h-full">
                            <img src="https://nellie-theme.myshopify.com/cdn/shop/files/ser003_970x.jpg?v=1634357332" alt="Nail Art" className="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-125" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center lg:px-60 py-32">
                <h1 className="text-xl pb-5">Phasellus ac scelerisque massa. Quisque non lacinia dui. Suspendisse sollicitudin tortor sed aliquam efficitur. Proin sed ultricies dolor, et auctor mauris. Etiam eleifend euismod mattis.</h1>
                <a href={'/catalog'}><button className="bg-red-400 hover:bg-black text-white py-4 px-8 rounded-full">Read More</button></a>
            </div>
            <div className="bg-red-50 flex flex-col items-center pt-16">
                <h1 className="text-4xl font-serif text-center">New Look for trendy Nails</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-20 max-w-7xl">
                    <div className="flex items-center text-right group">
                        <div>
                            <h2 className="text-xl pb-3 font-serif">Indulge in vibrant</h2>
                            <p className="text-gray-700">Vestibulum leonon efficitur molestie. Donec atdiamet laoreet pretium. Morbi cursus necipsum tristique. Quisque iaculis ligula convallis laoreet.</p>
                        </div>
                        <div className="flex-shrink-0 bg-black rounded-full w-20 h-20 flex items-center justify-center mx-5  text-red-400 duration-500 group-hover:bg-red-400 group-hover:text-white">
                            <i className="bi bi-lightbulb text-3xl "></i>
                        </div>
                    </div>
                    <div className="flex items-center text-left group">
                        <div className="flex-shrink-0 bg-black rounded-full w-20 h-20 flex items-center justify-center mx-5  text-red-400 duration-500 group-hover:bg-red-400 group-hover:text-white">
                            <i className="fa fa-hand-peace text-3xl "></i>
                        </div>
                        <div>
                            <h2 className="text-xl pb-3 font-serif">Shine from nails</h2>
                            <p className="text-gray-700">Suspendisse malesuada efficitur ultricies. Aenean aliquam ullamcorper congue. Donec scelerisque egetacisus arcu sit sapien ultrices tempor.</p>
                        </div>
                    </div>
                    <div className="flex items-center text-right group">
                        <div>
                            <h2 className="text-xl pb-3 font-serif">Meet new glamour</h2>
                            <p className="text-gray-700">Praesent rutrum ligula fringilla dignissim pellentesque sitamet. Integeo rhoncus dapibus venenatis donec dapibus varius ligulaet malesuada.</p>
                        </div>
                        <div className="flex-shrink-0 bg-black rounded-full w-20 h-20 flex items-center justify-center mx-5  text-red-400 duration-500 group-hover:bg-red-400 group-hover:text-white">
                            <i className="bi bi-droplet-fill text-3xl "></i>
                        </div>
                    </div>
                    <div className="flex items-center text-left group">
                        <div className="flex-shrink-0 bg-black rounded-full w-20 h-20 flex items-center justify-center mx-5  text-red-400 duration-500 group-hover:bg-red-400 group-hover:text-white">
                            <i className="fa fa-leaf text-3xl "></i>
                        </div>
                        <div>
                            <h2 className="text-xl pb-3 font-serif">Leaf with beauty</h2>
                            <p className="text-gray-700">Morbin venenatis pretium vehicula enimelit. Suspendisse facilisis purusat bibendum sitamet consectetur adipiscing sedsuscipit fringilla molestias.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 px-4 md:px-20">
                <h2 className="text-3xl font-serif font-semibold text-center mb-10">Our Client</h2>
                <div className={`grid gap-6 transition-all duration-1000 ${visibleCounts === 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2"}`}>
                    {getVisibleItems2().map((t, i) => (
                        <div key={i}>
                            <div className="flex items-center gap-4 py-4">
                                <a href={'/services'}><img src={t.image} alt={t.name} /></a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? "bg-red-500" : "bg-red-300"} transition-all duration-300`} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Services;