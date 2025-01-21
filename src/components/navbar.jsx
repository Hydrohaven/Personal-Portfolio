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
        <nav className="navbar flex justify-between items-center text-xs border-black border-b-2 md:text-xl px-14 py-4
                        fixed -translate-y-full transition-transform duration-300top-0 left-0 w-full z-20">
            <div className="flex items-center space-x-4">
                <a href="#">Joshua Micah Sullivan</a>
            </div>

            <div className="flex items-center space-x-4">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#experiences">Experiences</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

// export default Navbar;