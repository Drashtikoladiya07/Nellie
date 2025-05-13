function CreateAccount() {
    return (
        <div>
            <div className="bg-red-50 py-20">
                <h1 className="text-4xl text-center tracking-wider font-serif">CREATE ACCOUNT</h1>
                <h1 className="text-md tracking-widest text-center py-5"><a href={'/'} className="hover:text-red-400">Home</a> / <a href="#">Create Account</a></h1>
            </div>
            <div className="py-20 flex items-center justify-center bg-white">
                <div className="w-full max-w-lg p-8">
                    <input type="text" placeholder="First Name" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded" />
                    <input type="text" placeholder="Last Name" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded" />
                    <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded" />
                    <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded" />
                    <button className="bg-red-400 text-white px-6 py-3 rounded-full">Create</button>
                    <div className="text-sm mt-4">
                        <a href="/" className="hover:text-red-400">Return to Store</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
