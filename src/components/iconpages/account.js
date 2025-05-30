import React, { useState } from "react";

function Account() {
    const [view, setView] = useState("signIn");

    return (
        <div>
            <div className="bg-red-50 py-20">
                <h1 className="text-4xl text-center tracking-wider font-serif">ACCOUNT</h1>
                <h1 className="text-md tracking-widest text-center py-5"><a href={'/'} className="hover:text-red-400">Home</a> / <a href="#">Account</a></h1>
            </div>
            <div className="py-20 flex items-center justify-center bg-white">
                <div className="w-full max-w-lg">
                    {view === "signIn" && (
                        <div className="text-gray-500">
                            <input type="email" placeholder="Email" required className="w-full mb-4 px-4 py-3 border border-gray-300 rounded" />
                            <input type="password" placeholder="Password" required className="w-full mb-6 px-4 py-3 border border-gray-300 rounded" />
                            <button className="bg-red-400 text-white px-6 py-3 rounded-full mb-4">Sign In</button>
                            <div className="flex justify-between text-sm border-t-2 border-gray-200 pt-4">
                                <button onClick={() => setView("forgotPassword")} className="hover:text-red-400 duration-500">Forgot your password?</button>
                                <button onClick={() => setView("createAccount")} className="hover:text-red-400 duration-500">Create account</button>
                                <a href="/"><button className="hover:text-red-400 duration-500">Return to Store</button></a>
                            </div>
                        </div>
                    )}
                    {view === "forgotPassword" && (
                        <div className="text-gray-500">
                            <h2 className="text-lg font-semibold mb-2">Reset your password</h2>
                            <p className="mb-4">We will send you an email to reset your password.</p>
                            <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded" />
                            <div className="flex items-center gap-4">
                                <button className="bg-red-400 text-white px-6 py-3 rounded-full" onClick={() => alert("Email sent")}>Submit</button>
                                <button className="text-sm" onClick={() => setView("signIn")}>Cancel</button>
                            </div>
                        </div>
                    )}
                    {view === "createAccount" && (
                        <div className="text-gray-500">
                            <input type="text" placeholder="First Name" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded" />
                            <input type="text" placeholder="Last Name" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded" />
                            <input type="number" placeholder="Phone Number" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded" />
                            <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded" />
                            <input type="date" placeholder="Date of Birth" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded" />
                            <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded" />
                            <label className="pe-4"><input type="radio" name="gender" value="male" /> Male</label>
                            <label className="pe-4"><input type="radio" name="gender" value="female" /> Female</label>
                            <label className="pe-4"><input type="radio" name="gender" value="other" /> Other</label> <br />
                            <button className="bg-red-400 text-white px-6 py-3 rounded-full mt-5">Create</button>
                            <div className="text-sm mt-4">
                                <a href="/"><button onClick={() => setView("signIn")}>Return to Store</button></a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Account;