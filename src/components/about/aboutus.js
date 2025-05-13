import React from "react";
import { useState, useEffect } from "react";


function Aboutus() {
    const features = [
        {
            icon: "https://nellie-theme.myshopify.com/cdn/shop/files/icon-1.png?v=1614307211",
            title: "Speedy & Safety",
            subtitle: "Delivery",
        },
        {
            icon: "https://nellie-theme.myshopify.com/cdn/shop/files/icon-2.png?v=1614307211",
            title: "Orders $100+ Ship",
            subtitle: "Free",
        },
        {
            icon: "https://nellie-theme.myshopify.com/cdn/shop/files/icon-3.png?v=1614307211",
            title: "Happiness",
            subtitle: "Guarantee",
        },
    ];
    const testimonials = [
        {
            name: "Alicia Woods",
            title: "Manager",
            image: "https://nellie-theme.myshopify.com/cdn/shop/files/abo9_200x200.jpg?v=1614317685",
            quote: "Ullamcorper pulvinar elementum vulputaten. Pellentesque habitant tristique senectus etdaracturpis egestas rhoncus nullaugue nontortor. Nuncturpis arcuacinia sollicitudin euismod."
        },
        {
            name: "Erica Ryan",
            title: "CEO",
            image: "https://nellie-theme.myshopify.com/cdn/shop/files/abo8_200x200.jpg?v=1614317685",
            quote: "Vestibulum anteipsum primisin faucibus orciluetus etultrices posuere cubilia maximus auctor commodo. Praesent rutrum ligula, fringilla.Nuncturpis arcuacinia sollicitudin euismod."
        },
        {
            name: "Freda Casey",
            title: "Staff",
            image: "https://nellie-theme.myshopify.com/cdn/shop/files/abo7_200x200.jpg?v=1614317685",
            quote: "Phasellus condimentum nuncid enimentid velitcommodo efficitur. Duisauctor maurisn maximus cursus, purus neque ultricies velit mattis lacus libero tempus sem. Vivamus aturpis fusce feugiat."
        },
    ];
    const ourclients = [
        { image: "https://nellie-theme.myshopify.com/cdn/shop/files/client-1.png?v=1614307169" },
        { image: "https://nellie-theme.myshopify.com/cdn/shop/files/client-2.png?v=1614307169" },
        { image: "https://nellie-theme.myshopify.com/cdn/shop/files/client-3.png?v=1614307169" },
        { image: "https://nellie-theme.myshopify.com/cdn/shop/files/client-4.png?v=1614307169" },
        { image: "https://nellie-theme.myshopify.com/cdn/shop/files/client-5.png?v=1614307169" },
    ];

    const visibleCount = 2;
    const visibleCounts = 4;
    const totalSlides = Math.ceil(testimonials.length / visibleCount);

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleItems = () => {
        let items = [];
        for (let i = 0; i < visibleCount; i++) {
            items.push(testimonials[(index + i) % testimonials.length]);
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
                <h1 className="text-4xl text-center tracking-wider font-serif">ABOUT</h1>
                <h1 className="text-md tracking-widest text-center py-5"><a href="/" className="hover:text-red-400">Home </a> /  About</h1>
            </div>
            <div className="py-12">
                <h1 className=" text-3xl font-serif text-center py-5">Make your nails shine today</h1>
                <h1 className="text-center text-md pt-2">Morbi quis venenatis iaculis pretium vehicula velited nonenimelit. Suspendisse aliquet facilisis purus bibendum. Lorem ipsum sitamet viverra condimentum.</h1>
            </div>
            <div className="flex justify-center items-center">
                <img src="https://nellie-theme.myshopify.com/cdn/shop/files/a_1_........_900x.jpg?v=1634624580" alt="Centered" />
            </div>
            <div className="bg-white py-10 px-9">
                <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                    {features.map((branded, idx) => (
                        <div key={idx} className="flex items-start gap-4 text-sm">
                            <img src={branded.icon} alt={branded.title} className="w-10 h-10 opacity-70" />
                            <div className="font-medium text-black">
                                <div className="font-semibold">{branded.title}</div>
                                <div className="font-semibold">{branded.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-red-50 flex items-center justify-center px-8 pt-16">
                <div className="max-w-7xl w-full flex flex-col lg:flex-row">
                    <div className="flex-1 pt-20">
                        <h2 className="text-3xl md:text-4xl font-serif pb-4">Branded nail polish</h2>
                        <p className="text-gray-700 pb-10">Morbi iaculis in nisi eleifend convallis pretium varius in aliquam. Curabitur males elit sed placerat interdum ecur sus. Morbi laoreet sapien id scelerisque dapibus sagittis ornare interdum.</p>
                        <div className="space-y-16 py-5">
                            <div className="flex items-start gap-5">
                                <div className="p-4 rounded-xl">
                                    <i class="bi bi-brush text-4xl text-white bg-red-300 py-3 px-4 rounded-full hover:bg-black duration-500"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold">Perfect Color</h4>
                                    <p className="text-gray-700">Suspendisse efficitur venenatis aliquam aenean maximus duivenenatis suscipit neque vitae vestibulum neque enim mattis.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="p-4 rounded-xl">
                                    <i class="fa fa-hand-paper text-4xl text-white bg-red-300 p-4 rounded-full hover:bg-black duration-500"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold">Chemical Free</h4>
                                    <p className="text-gray-700">Maecenas nulla ipsum fermentum accumsan nullain dapibus tincidunt interdum et malesuada fames acam primisin faucibus.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="p-4 rounded-xl">
                                    <i className="fa fa-american-sign-language-interpreting  text-4xl text-white bg-red-300 p-3 rounded-full hover:bg-black duration-500"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold">Shinny Glow</h4>
                                    <p className="text-gray-700">Proin egestas libero ligula dignisim massa tincidunt. Fusce rutrum tortor tempor imperdiet condimentum ligula interdum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src="https://nellie-theme.myshopify.com/cdn/shop/files/about002_970x.jpg?v=1634355935" className="w-full h-5/6" />
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center justify-center md:px-16 py-12 pt-20 bg-white">
                <div>
                    <img src="https://nellie-theme.myshopify.com/cdn/shop/files/abo003_970x.jpg?v=1634356014" className="w-full" />
                </div>
                <div className="bg-red-50 h-full rounded-lg shadow-sm w-full items-center justify-center flex flex-col p-16">
                    <p className="text-gray-800 text-lg leading-relaxed pb-4"> Curabitur vitaeolestie accumsan neque acorrcı maximus sollicitudin. Vivamus sitamet consequat, rhoncus felisut, commodo tortor quisque.</p>
                    <p className="text-red-400 font-medium">Modern touch, Beautiful feel for nails</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center justify-center md:px-16 py-6 pb-20 bg-white">
                <div className="bg-red-50 h-full rounded-lg shadow-sm w-full items-center justify-center flex flex-col p-16">
                    <p className="text-gray-800 text-lg leading-relaxed pb-4">Praesent tincidunt pretium portitor malesua ipsum quisligula portitor placerat. Vestiulum primsin faucibus luctus ultrices posure cubilia maximus auctor commodo.</p>
                    <p className="text-red-400 font-medium">Shiny shots for your unique look</p>
                </div>
                <div>
                    <img src="https://nellie-theme.myshopify.com/cdn/shop/files/abo004_970x.jpg?v=1634361278" className="w-full" />
                </div>
            </div>
            <div className="bg-red-50 py-20 md:px-20">
                <h2 className="text-3xl font-serif font-semibold text-center mb-10">Testimonial</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000">
                    {getVisibleItems().map((t, i) => (
                        <div key={i} className="bg-red-100 p-6 rounded-md shadow-md">
                            <p className="text-gray-800 mb-4 text-sm leading-relaxed font-medium">"{t.quote}"</p>
                            <div className="flex items-center gap-4 py-4">
                                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold text-sm">{t.name}</p>
                                    <p className="text-red-500 text-sm">{t.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center pt-10 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? "bg-red-500" : "bg-red-300"} transition-all duration-300`} />
                    ))}
                </div>
            </div>
            <div className="py-20 px-4 md:px-20">
                <h2 className="text-3xl font-serif font-semibold text-center mb-10">Our Client</h2>
                <div className={`grid gap-6 transition-all duration-1000 ${visibleCounts === 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2"}`}>
                    {getVisibleItems2().map((t, i) => (
                        <div key={i}>
                            <div className="flex items-center gap-4 py-4">
                                <a href="/aboutus"><img src={t.image} alt={t.name} /></a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? "bg-pink-500" : "bg-pink-300"} transition-all duration-300`} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;