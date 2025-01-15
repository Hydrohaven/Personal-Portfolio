const Navbar = () => {
    return (
        <nav className="sticky bg-black rounded-full w-1/2 mx-auto p-4 px-6 mt-3 text-white">
            <ul className="flex justify-between">
                <li className="hover:bg-green-400 rounded-3xl p-2 px-5">Home</li>
                <li className="hover:bg-green-400 rounded-3xl p-2 px-5">Projects</li>
                <li className="hover:bg-green-400 rounded-3xl p-2 px-5">Experiences</li>
                <li className="hover:bg-green-400 rounded-3xl p-2 px-5">Connect</li>
            </ul>
        </nav>
    );
};