const { useEffect } = React;

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(".navbar");
            if (window.scrollY > window.innerHeight) {
                navbar?.classList.remove("-translate-y-full");
            } else {
                navbar?.classList.add("-translate-y-full");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        //   top-0 left-0 transform -translate-y-full transition-transform duration-300
        <nav className="navbar flex justify-between items-center border-gray-400 text-xs lg:text-xl border-b-2 px-14 py-4
                        fixed -translate-y-full top-0 left-0">
            <div className="flex items-center space-x-4">
                <a href="#">Joshua Micah Sullivan</a>
            </div>

            <div className="flex items-center space-x-4">
                <a href="fluid.html">Home</a>
                <a href="water.html">Experiences</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    );
};

// export default Navbar;