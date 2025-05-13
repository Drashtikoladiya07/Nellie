import React, { useEffect, useState } from 'react';

function AutoSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev === 2 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className={`absolute inset-0 ${current === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <div className="w-full h-full bg-cover bg-center flex items-center px-4 md:px-16 relative" style={{ backgroundImage: `url('https://nellie-theme.myshopify.com/cdn/shop/files/slider-1.jpg?v=1614306818')` }}>
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                    <div className="text-start text-white relative z-10" data-aos="fade-right">
                        <h1 className='lg:text-5xl md:text-4xl text-3xl font-serif font-bold leading-tight'>Get a new look <br />for your elegant nails</h1>
                        <h5 className='lg:text-xl text-base py-10 leading-8'>Et netus et malesuada fames ac turpis egestas integer <br />malesuada proin libero nunc marques</h5>
                        <a href="/artificialnails"><button className='bg-red-400 hover:bg-red-500 text-white py-3 px-5 rounded-full'>Shop Now</button></a>
                    </div>
                </div>
            </div>
            <div className={`absolute inset-0 ${current === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <div className="w-full h-full bg-cover bg-center flex items-center px-4 md:px-16 relative" style={{ backgroundImage: `url('https://nellie-theme.myshopify.com/cdn/shop/files/slider-bg2.jpg?v=1614320298')` }}>
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                    <div className="text-start text-white relative z-10" data-aos="fade-right">
                        <h1 className='lg:text-5xl md:text-4xl text-3xl font-serif font-bold leading-tight'>Fall in love with <br />trendy look of nail art</h1>
                        <h5 className='lg:text-xl text-base py-10 leading-8'>Augue interdum velit euismod in. Aliquam sem fringilla <br /> ut morbi Ac tincidunt vitae semper</h5>
                        <a href="/glossynails"><button className='bg-red-400 hover:bg-red-500 text-white py-3 px-5 rounded-full'>Shop Now</button></a>
                    </div>
                </div>
            </div>
            <div className={`absolute inset-0 ${current === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <div className="w-full h-full bg-cover bg-center flex items-center px-4 md:px-16 relative" style={{ backgroundImage: `url('https://nellie-theme.myshopify.com/cdn/shop/files/slider-bg3.jpg?v=1614320299')` }}>
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                    <div className="text-start text-white relative z-10" data-aos="fade-right">
                        <h1 className='lg:text-5xl md:text-4xl text-3xl font-serif font-bold leading-tight'>Classy nail look  <br />for new trends</h1>
                        <h5 className='lg:text-xl text-base py-10 leading-8'>Diam volutpat commodo sed egestas egestas fringilla. <br />Vitae tempus quam pellentes</h5>
                        <a href="/manicureset"><button className='bg-red-400 hover:bg-red-500 text-white py-3 px-5 rounded-full'>Shop Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AutoSlider;
