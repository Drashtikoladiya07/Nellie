import { useState } from "react";

function ProductTabs() {
    const [activeTab, setActiveTab] = useState("description");
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="flex border-b">
                <button className={`px-3 py-3 duration-500 text-xs font-medium ${activeTab === "description" ? "border-b-2 border-red-400 bg-red-400" : "text-gray-500"}`} onClick={() => setActiveTab("description")}>Product Description</button>
                <button className={`px-3 py-3 duration-500 text-xs font-medium ${activeTab === "information" ? "border-b-2 border-red-400 bg-red-400" : "text-gray-500"}`} onClick={() => setActiveTab("information")}>Additional information</button>
                <button className={`px-3 py-3 duration-500 text-xs font-medium ${activeTab === "reviews" ? "border-b-2 border-red-400 bg-red-400" : "text-gray-500"}`} onClick={() => setActiveTab("reviews")}>Reviews</button>
            </div>
            <div className="p-6 border">
                {activeTab === "description" && (
                    <div>
                        <p className="pb-4">Rures tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis.</p>
                        <h2 className="text-xl font-semibold pb-2">Lorem ipsum dolor sit amet</h2>
                        <p className="pb-4">Sonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <h2 className="text-xl font-semibold pb-2">Busey ipsum dolor sit amet</h2>
                        <p className="pb-4">Tortor at auctor urna nunc id cursus metus aliquam. Odio tempor orci dapibus ultrices. Tortor condimentum lacinia quis vel eros donec ac odio. Velit euismod in pellentesque massa placerat duis ultricies lacus. Scelerisque purus semper eget duis at tellus at urna condimentum. Eu facilisis sed odio morbi quis commodo odio aenean urpis massa sed elemen. </p>
                        <h2 className="text-xl font-semibold pb-2">Vestibulum sit amet ipsum</h2>
                        <p>Praesent vestibulum congue tellus at fringilla. Curabitur vitae semper sem, eu convallis est. Cras felis nunc commodo eu convallis vitae interdum non nisl. Maecenas ac est sit amet augue pharetra convallis nec danos dui. Cras suscipit quam et turpis eleifend vitae malesuada magna congue. Damus id ullamcorper neque. Sed vitae mi a mi pretium aliquet ac sed elit. Pellentesque nulla eros accumsan quis justo at tincidunt lobortis denimes loremous. Suspendisse vestibulum lectus in lectus volutpat, ut dapibus purus pulvinar. Vestibulum sit amet auctor ipsum.</p>
                    </div>
                )}
                {activeTab === "information" && (
                    <div>
                        <h2 className="text-xl font-semibold pb-4">Returns Policy</h2>
                        <p className="pb-4">You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).</p>
                        <p className="pb-4">You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).</p>
                        <p className="pb-4">If you need to return an item, simply login to your account, view the order using the 'Complete Orders' link under the My Account menu and click the Return Item(s) button. We'll notify you via e-mail of your refund once we've received and processed the returned item.</p>
                        <h2 className="text-xl font-semibold pb-4">Shipping</h2>
                        <p className="pb-4">We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.</p>
                        <p className="pb-4">When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page.</p>
                        <p className="pb-4">Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound.</p>
                    </div>
                )}
                {activeTab === "reviews" && (
                    <div className="py-10 px-4 md:px-0 text-center">
                        <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
                        <div className="flex justify-center items-center gap-10 py-8 max-w-5xl mx-auto">
                            <div className="">
                                <div className="flex text-red-400 text-xl">
                                    {[1, 2, 3, 4, 5].map((_, index) => (
                                        <i key={index} className="bi bi-star px-1"></i>
                                    ))}
                                </div>
                                <p className="text-lg">Be the first to write a review</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-md transition">Write a review</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="text-center">
                <div className="relative">
                    <div className="flex justify-center mt-10">
                        <button onClick={toggleModal} className="bg-red-400 text-white px-8 py-5 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-black duration-500">
                            <i class="fa-solid fa-file-pen px-2"></i>Enquiry about product?
                        </button>
                    </div>
                    {isOpen && (
                        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white w-[90%] md:w-[500px] rounded shadow-lg p-8 relative">
                                <button onClick={toggleModal} className="absolute top-4 right-4 text-xl text-red-500 hover:text-red-700">&times;</button>
                                <h2 className="text-xl font-semibold mb-6 text-center">Let us know about your query!</h2>
                                <input type="text" placeholder="Name" className="w-full p-3 border rounded mb-4" />
                                <input type="email" placeholder="Email" className="w-full p-3 border rounded mb-4" />
                                <input type="tel" placeholder="Phone" className="w-full p-3 border rounded mb-4" />
                                <textarea placeholder="Subject" className="w-full p-3 border rounded mb-4 h-32"></textarea>
                                <div className="mb-6 flex gap-6 items-center">
                                    <label>
                                        <input type="radio" name="contact" className="mr-1" /> Mail
                                    </label>
                                    <label>
                                        <input type="radio" name="contact" className="mr-1" /> Phone
                                    </label>
                                    <label>
                                        <input type="radio" name="contact" className="mr-1" /> Both
                                    </label>
                                </div>
                                <button className="w-full bg-red-400 text-white py-3 rounded-full font-semibold hover:bg-black duration-300">Send</button>
                            </div>
                        </div>
                    )}
                </div>
                <h1 className="text-3xl font-serif pt-10">Recommended products</h1>
            </div>
        </div>
    );
};

export default ProductTabs;