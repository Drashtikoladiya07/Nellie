import React from "react";

function Contact() {
    return (
        <div>
            <div className="bg-red-50 py-20">
                <h1 className="text-4xl text-center tracking-wider font-serif">CONTACT</h1>
                <h1 className="text-md tracking-widest text-center py-5"><a href={'/'} className="hover:text-red-400">Home</a> / <a href="#">Contact</a></h1>
            </div>
            <div className="lg:px-20 py-20">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6520.821969313514!2d-76.616404!3d39.298662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80499b5c180cd%3A0x1f3567a61de993ff!2sGeorge%20Peabody%20Library!5e1!3m2!1sen!2sin!4v1745576329344!5m2!1sen!2sin" className="w-full h-96" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="bg-white flex items-center justify-center py-20 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-full w-full">
                        <div className="group border group-hover:border-red-400 py-8 flex flex-col items-center text-center">
                            <div className="bg-black group-hover:bg-red-400 duration-500 rounded-full w-16 h-16 flex items-center justify-center">
                                <i className="bi bi-telephone-fill text-white text-2xl"></i>
                            </div>
                            <h2 className="text-xl font-semibold py-4">Phone</h2>
                            <div className="flex">
                                <p className="font-bold px-2">Toll-Free :</p>
                                <p className="pb-2">0000 - 123 - 456789</p>
                            </div>
                            <div className="flex">
                                <p className="font-bold px-2">Fax :</p>
                                <p>0000 - 123 - 456789</p>
                            </div>
                        </div>
                        <div className="group border group-hover:border-red-400 py-8 flex flex-col items-center text-center">
                            <div className="bg-black group-hover:bg-red-400 duration-500 rounded-full w-16 h-16 flex items-center justify-center">
                                <i className="bi bi-envelope-fill text-white text-2xl"></i>
                            </div>
                            <h2 className="text-xl font-semibold py-4">Email</h2>
                            <p>mail@example.com</p>
                            <p>support@example.com</p>
                        </div>
                        <div className="group border group-hover:border-red-400 py-8 flex flex-col items-center text-center">
                            <div className="bg-black group-hover:bg-red-400 duration-500 rounded-full w-16 h-16 flex items-center justify-center">
                                <i className="bi bi-geo-alt-fill text-white text-2xl"></i>
                            </div>
                            <h2 className="text-xl font-semibold py-4">Address</h2>
                            <p>No: 58 A, East Madison Street,</p>
                            <p>Baltimore, MD, USA 4508</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-white py-12 px-4">
                    <form className="w-full max-w-xl space-y-6">
                        <h2 className="text-3xl text-center font-serif pb-8">Contact Form</h2>
                        <input type="text" placeholder="Name" className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-300" />
                        <input type="email" placeholder="Email" className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-300" />
                        <input type="text" placeholder="Phone" className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-300" />
                        <textarea placeholder="Message" rows="10" className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"></textarea>
                        <button type="submit" className="w-full bg-red-400 duration-500 text-white font-semibold py-3 rounded-full hover:bg-black transition">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;