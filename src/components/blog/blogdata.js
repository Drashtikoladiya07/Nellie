import React, { useState } from "react";

const blogData = [
    {
        image: "https://nellie-theme.myshopify.com/cdn/shop/articles/blog-10_770x.jpg?v=1600340531",
        title: "Varieties of nail colors to make you satiate",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a...",
    },
    {
        image: "https://nellie-theme.myshopify.com/cdn/shop/articles/blog-9_770x.jpg?v=1600340531",
        title: "Trendy & fashionable nail polish colors",
        desc: "Ruis curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent cong...",
    },
    {
        image: "https://nellie-theme.myshopify.com/cdn/shop/articles/blog-8_770x.jpg?v=1600340531",
        title: "Bored of single-toned nail art patterns",
        desc: "Muis sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augu...",
    },
    {
        image: "https://nellie-theme.myshopify.com/cdn/shop/articles/blog-7_770x.jpg?v=1600340531",
        title: "Artwork for your fingernails and toenails",
        desc: "Trevida on kiupis. Herlentesque ios iouesent retpis. Aenean posuere, tortor sed cursus feugiat nunc augue blandit nun...",
    },
    {
        image: "https://nellie-theme.myshopify.com/cdn/shop/articles/blog-6_770x.jpg?v=1600340531",
        title: "Explore creative nail art & nail designs",
        desc: "Tedes yum deriis juyoque gytatibus ot hytnis ous iouturient montes, tyucetur ridiculus mus. Donec quam felis, ultric...",
    },
    {
        image: "https://nellie-theme.myshopify.com/cdn/shop/articles/blog-5_770x.jpg?v=1600340531",
        title: "Convert your days into occasions",
        desc: "Fames aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugia...",
    },
    {
        image: "https://nellie-theme.myshopify.com/cdn/shop/articles/blog-4_770x.jpg?v=1600340531",
        title: "Healthy and beautiful touch for nails",
        desc: "Quis imperdiet massa tincidunt nunc pulvinar sapien et. Gravida quis blandit turpis cursus in hac. Fames ac turpis eg...",
    },
    {
        image: "https://nellie-theme.myshopify.com/cdn/shop/articles/blog-11_770x.jpg?v=1600340531",
        title: "Let’s give your nail a style party",
        desc: "Cames cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultrici...",
    },
    {
        image: "https://nellie-theme.myshopify.com/cdn/shop/articles/blog-2_770x.jpg?v=1600340531",
        title: "The heart of perfect nail polishing",
        desc: "Pris sed aliquam nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus co...",
    },
    {
        image: "https://nellie-theme.myshopify.com/cdn/shop/articles/blog-1_770x.jpg?v=1600340531",
        title: "What are different types of nail polish?",
        desc: "Hnis nullam sagittis. Suspendisse pulvinar augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque...",
    },
];
const itemsPerPage = 6;

function Blogdata() {
    const [page, setPage] = useState(1);
    const startIndex = (page - 1) * itemsPerPage;
    const currentItems = blogData.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(blogData.length / itemsPerPage);

    return (
        <div className="px-10 py-12 bg-white min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentItems.map((item, index) => (
                    <div key={index} className="bg-white p-6">
                        <img src={item.image} alt="" className="w-full h-60 object-cover pb-5" />
                        <h2 className="text-xl font-semibold pb-3 hover:text-red-400 duration-500">{item.title}</h2>
                        <p className="text-gray-600 pb-5">{item.desc}</p>
                        <button className="bg-red-400 hover:bg-black duration-500 text-white font-semibold px-8 py-4 rounded-full">Read more</button>
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
    );
};

export default Blogdata;