import React from "react";

function Search() {
    return (
        <div>
            <div className="bg-red-50 py-20">
                <h1 className="text-4xl text-center tracking-wider font-serif">SEARCH</h1>
                <h1 className="text-md tracking-widest text-center py-5"><a href={'/'} className="hover:text-red-400">Home</a> / <a href="#">Search</a></h1>
            </div>
            <div className="flex flex-col items-center justify-center py-20">
                <h2 className="text-3xl md:text-4xl font-serif pb-6 text-center">Search for products on our site</h2>
                <div className="relative w-full max-w-md">
                    <input type="text" placeholder="Search" className="w-full px-6 py-4 pr-16 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 placeholder:text-gray-500 text-lg" />
                    <a href="#"><button type="submit" className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-red-400 hover:bg-red-500 text-white px-4 py-3 rounded-full transition-all"><i class="bi bi-search"></i></button></a>
                </div>
            </div>
        </div>
    );
};

export default Search;