const { useEffect } = React;

const Navbar = () => {
    useEffect(() => {
        const navbarScroll = () => {
            const navbar = document.querySelector(".navbar");
            if (window.scrollY >= window.innerHeight) {
                navbar?.classList.remove("-translate-y-full");
            } else {
                navbar?.classList.add("-translate-y-full");
            }
        };

        window.addEventListener("scroll", navbarScroll);
        return () => window.removeEventListener("scroll", navbarScroll);
    }, []);

    return (
        //   top-0 left-0 transform -translate-y-full transition-transform duration-300
        <nav className="navbar flex justify-between items-center text-base md:text-xl border-black border-b-2 px-4 md:px-14 py-3 md:py-4
                        fixed -translate-y-full transition-transform duration-300 top-0 left-0 w-full z-20">
            <div className="hidden md:flex items-center ml-2">
                <a href="#" className="hover:scale-105 transition-scale duration-300">Joshua Micah Sullivan</a>
            </div>

            <div className="flex items-center space-x-4">
                <a href="#" className="inline md:hidden">Home</a>
                <a href="#about" className="sm:hover:scale-105 ransition-scale duration-300">About</a>
                <a href="#projects" className="sm:hover:scale-105 ransition-scale duration-300">Projects</a>
                <a href="#experiences" className="sm:hover:scale-105 ransition-scale duration-300">Experiences</a>
                <a href="#contact" className="sm:hover:scale-105 ransition-scale duration-300">Contact</a>
            </div>
        </nav>
    );
};

// export default Navbar;