import React, { useState } from "react";

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faq = [
        { question: "How will my order be delivered to me?", answer: "Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official." },
        { question: "what do I need to know?", answer: "Phasellus faucibus scelerisque eleifend donec pretium vulputate. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Dui vivamus arcu felis bibendum. Varius duis at consectetur lorem donec massa sapien faucibus et. Sed euismod nisi porta lorem. Duis tristique sollicitudin nibh sit amet. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo." },
        { question: "How will I know if order is placed successfully?", answer: "Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Posuere morbi leo urna molestie at. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Et netus et malesuada fames ac turpis egestas maecenas. Neque sodales ut etiam sit amet nisl purus in. Nibh cras pulvinar mattis nunc sed blandit." },
        { question: "How do I check the status of my order?", answer: "Egestas diam in arcu cursus. Suspendisse faucibus interdum posuere lorem. Iaculis urna id volutpat lacus. Sed odio morbi quis commodo odio. Dui sapien eget mi proin sed libero enim sed. Pharetra et ultrices neque ornare aenean euismod elementum. Nulla aliquet porttitor lacus luctus accumsan. Vel facilisis volutpat est velit egestas dui. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum." },
        { question: "Can I cancel my order?", answer: "Zorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official." },
        { question: "Do you allow exchanges?", answer: "Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Est ullamcorper eget nulla facilisi. Purus in massa tempor nec feugiat. Augue mauris augue neque gravida in fermentum et sollicitudin. Lacus laoreet non curabitur gravida arcu ac tortor. A diam maecenas sed enim ut sem viverra. Sed libero enim sed faucibus turpis. Eu turpis egestas pretium aenean. Volutpat odio facilisis mauris sit amet massa vitae." },
        { question: "What are the shipping charges?", answer: "Est sit amet facilisis magna etiam. Euismod lacinia at quis risus sed vulputate odio. At lectus urna duis convallis convallis tellus. Proin nibh nisl condimentum id venenatis. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Turpis tincidunt id aliquet risus. Lorem donec massa sapien faucibus et molestie ac. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper." },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className="bg-red-50 py-20">
                <h1 className="text-4xl text-center tracking-wider font-serif">FAQ</h1>
                <h1 className="text-md tracking-widest text-center py-5"><a href={'/'} className="hover:text-red-400">Home</a> / <a href="#">Faq</a></h1>
            </div>
            <div className='py-20'>
                <div className="max-w-7xl mx-auto p-4 ">
                    <div>
                        {faq.map((faq, index) => (
                            <div key={index} className="border transition-all duration-300" >
                                <div className="flex justify-between items-center p-7 cursor-pointer border-b" onClick={() => toggleFAQ(index)} >
                                    <h2 className={`font-bold transition-all duration-300 ${activeIndex === index ? "text-red-400" : "text-black"}`}> {faq.question}</h2>
                                    <span className={`transition-all duration-300 ${activeIndex === index ? "text-red-400" : "text-black"}`} >
                                        {activeIndex === index ? "˄" : "˅"}
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <div className="p-7 text-black">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq;