import React from "react";
import Blogdata from "./blogdata";

function Blog() {
    return (
        <div>
            <div className="bg-red-50 py-20">
                <h1 className="text-4xl text-center tracking-wider font-serif">NEWS</h1>
                <h1 className="text-md tracking-widest text-center py-5"><a href={"/"} className="hover:text-red-400">Home</a> / <a href="#">NEWS</a></h1>
            </div>
            <Blogdata />
        </div>
    );
};

export default Blog;