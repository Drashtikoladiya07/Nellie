import React from "react";
import { useState } from "react";
import AutoSlider from "./autoslider";
import Nailcard from "./nailcard";
import Manicurecard from "./manicurecard";
import Nailgallery from "./nailgallery";

function Home() {
    const cards = [
        {
            title: "Marbled Effect",
            image: "https://nellie-theme.myshopify.com/cdn/shop/files/3_970x.jpg?v=1615322304",
        },
        {
            title: "Shinning Look",
            image: "https://nellie-theme.myshopify.com/cdn/shop/files/img-2_970x.jpg?v=1614307185",
        },
        {
            title: "Glow Finish",
            image: "https://nellie-theme.myshopify.com/cdn/shop/files/1_970x.jpg?v=1615322304",
        },
    ];
    const testimonials = [
        {
            name: 'Lena Robertson',
            role: 'Manager',
            text: `Suspendisse maleesuada efficitur ultricies. Aenean aliquam neclorem ullamcoriper congue. Donec sitaemet risus etnunc sodales scelerisque egetac risus. Nullaac ultrices tempor eu sit amet magna. Nullam posuere temptor laoreet, neque massa volutpat congue tortor arcusit amet tortor.`,
            rating: 5,
        },
        {
            name: 'Bessie Gutierrez',
            role: 'CEO',
            text: `Phaselluseget condimentum commodo efficitur. Duis auctor, maurisin maximus cursus, purus neque ultricies velit, mattis lacus libero tempus. Vivamus aturpis fusce feugiatin mauris sollicitudin iaculis neque ligula convallis laoreet lacinia mauris ligula porttitor placerat tincidunt.`,
            rating: 4,
        },
        {
            name: 'Ellen Fletcher',
            role: 'Staff',
            text: `Aenean inapien eunisiporta ullamcorper anecuam. Pellentesque enimdolor, varius vitae tincidunt mattis euneque. Curabitur atjusto sedmassa bibendum accumsan. Aliquam erat volutpat. In dolor erat, lacinia invelitin, porttitor tincidunt urna  finibus augue risus  orci ligula egestas.`,
            rating: 4,
        },
        {
            name: 'Regina Carter',
            role: 'Staff',
            text: `Maecenas aipsum volutpat, pharetra massa facilisis dolor. Fusce sodales nibhmaximus lacinia iaculis. Donecquis malesuada lectus. Donecet tincidunt euismod. Maecenas eget ligula avelit bibendum faucibus sitamet aclorem. Phasellus velturpis placerat  parturient montes ullamcorper.`,
            rating: 1,
        },
    ];
    const [index, setIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    const next = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const { name, role, text, rating } = testimonials[index];
    return (
        <div>
            <AutoSlider />
            <div className="py-14 tracking-widest text-center">
                <h1 className="font-bold border-b-2 border-red-400 w-40 mx-auto pb-1">UNIQUE COLORS</h1>
                <h1 className="font-semibold font-serif text-3xl pt-10">Shine that brightens your life</h1>
            </div>
            <Nailcard />
            <h1 className="font-semibold tracking-wider text-center font-serif text-3xl py-10">Get your nails done by a skilled nail artist</h1>
            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((item, index) => (
                    <div key={index} className="relative group overflow-hidden">
                        <img src={item.image} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-500 group-hover:bg-opacity-60">
                            <h2 className="text-white text-2xl md:text-3xl font-semibold hover:text-red-400 tracking-wider">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className="py-20 tracking-widest text-center">
                <h1 className="font-bold border-b-2 border-red-400 w-72 mx-auto pb-1">NEW MANICURE COLLECTIONS</h1>
                <h1 className="font-semibold font-serif text-3xl pt-10">Latest products</h1>
            </div>
            <Manicurecard />
            <div className="bg-pink-100 py-20">
                <div className="bg-pink-50 flex my-5 lg:mx-6 md:mx-10 flex-col lg:flex-row items-center gap-10 ">
                    <div className="w-full lg:w-1/2"><img src="https://nellie-theme.myshopify.com/cdn/shop/files/img-3_1280x.jpg?v=1614307170" className="w-full h-full object-cover" /></div>
                    <div className="w-full lg:w-1/2 text-center lg:text-left px-4 py-5">
                        <h2 className="text-3xl md:text-4xl font-serif pb-4"> Get the best nails and <br /> manicure your nails</h2>
                        <p className="text-gray-700 text-lg pb-6">Aenean ullamcorper anequam. Pellentesque enimdolor, varius tincidunt mattis euneque. Curabitur atjusto sedmassa bibendum accumsan. Aliquamerat volutpat dolorerat lacinia porttitor tincidunt.</p>
                        <a href="#" className="inline-block font-semibold text-black border-b-4 border-red-400 transition-all duration-300">READ MORE</a>
                    </div>
                </div>
                <div className="bg-pink-50 flex mt-10 lg:mx-6 md:mx-10 flex-col lg:flex-row items-center gap-10 ">
                    <div className="w-full lg:w-1/2 text-center lg:text-left lg:px-12 py-5">
                        <h2 className="text-3xl md:text-4xl font-serif pb-4">Get a new look for your nails</h2>
                        <p className="text-gray-700 text-lg pb-6">Donec quisinterdum tellus. Aliquam fringilla metus risus, vitae dictumnulla laoreet aecenas euismod nondolor bibendum. Pellentesque pulvinar laoreet dolor invarius. Nam tincidunt enim libero.</p>
                        <a href="#" className="inline-block font-semibold text-black border-b-4 border-red-400 transition-all duration-300">READ MORE</a>
                    </div>
                    <div className="w-full lg:w-1/2"><img src="https://nellie-theme.myshopify.com/cdn/shop/files/img-4_1280x.jpg?v=1614307170" className="w-full h-full object-cover" /></div>
                </div>
            </div>
            <h1 className="font-semibold tracking-wider text-center font-serif text-3xl py-20">Reach out our customers</h1>
            <div className="bg-white pt-5 pb-20 text-center max-w-3xl mx-auto">
                <div className="flex justify-center pb-4">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className={`bi ${i < rating ? 'bi-star-fill text-red-400' : 'bi-star text-gray-300'} mx-0.5 text-lg`}></i>
                    ))}
                </div>
                <p className="text-gray-800 leading-relaxed pb-8">{text}</p>
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="text-lg text-gray-600 pb-6">{role}</p>
                <div className="flex justify-center gap-4">
                    <button onClick={prev} className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition">
                        <i className="bi bi-chevron-left text-xl"></i>
                    </button>
                    <button onClick={next}
                        className="w-12 h-12 rounded-full bg-red-400 text-white flex items-center justify-center hover:bg-red-500 transition">
                        <i className="bi bi-chevron-right text-xl"></i>
                    </button>
                </div>
            </div>
            <Nailgallery />
        </div>
    );
};

export default Home;