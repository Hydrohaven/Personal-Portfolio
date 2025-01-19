const { useEffect, useState } = React;

const generateUniqueId = (() => {
    let count = 0;
    return () => `cog-${count++}`;
})();

const Landing = () => {
    const [isVisible, setIsVisible] = useState(false);

    const CogContainer = ({ positionClass }) => {
        const cog1Id = generateUniqueId();
        const cog2Id = generateUniqueId();
        const cog3Id = generateUniqueId();

        useEffect(() => {
            const handleScroll = () => {
            const scrollTop = window.scrollY; // Current scroll position
            const scrollHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
            const scrollPercentage = scrollTop / scrollHeight; // Scroll percentage
    
            // Rotate the cogs based on scroll percentage
            document.getElementById(cog1Id).style.transform = `rotate(${scrollPercentage * 100}deg)`;
            document.getElementById(cog2Id).style.transform = `rotate(-${scrollPercentage * 100}deg)`;
            document.getElementById(cog3Id).style.transform = `rotate(${scrollPercentage * 100}deg)`;
            };
    
            window.addEventListener("scroll", handleScroll);
    
            // Cleanup the event listener on component unmount
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
      return (
            <div className={`absolute ${positionClass} border-red-500 border-dotted border-2`}>
                {/* Central Cog */}
                <img
                    src="../img/cog1.svg"
                    className="w-24 h-24 transform"
                    id={cog1Id}
                    alt="Cog 1"
                />
                {/* Left Cog */}
                <img
                    src="../img/cog1.svg"
                    className="absolute left-14 top-1/2 w-20 h-20 transform"
                    id={cog2Id}
                    alt="Cog 2"
                />
                {/* Right Cog */}
                <img
                    src="../img/cog1.svg"
                    className="w-16 h-16 transform"
                    id={cog3Id}
                    alt="Cog 3"
                />
            </div>
        );
    };

    useEffect(() => {
        const handleElevationUpdate = (event) => {
            if (event.detail.elevation >= 1) {
                setIsVisible(true); // Show the element when elevation >= 5
            }
        };
        
        window.addEventListener('elevationReached', handleElevationUpdate);

        return () => {
            window.removeEventListener('elevationReached', handleElevationUpdate); // Cleanup listener
        };
    }, []);
    
    const handleScrollDown = () => {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        const nextScroll = currentScroll + window.innerHeight;

        window.scrollTo({
            top: nextScroll,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Cogs */}
            {/* <CogContainer positionClass="top-10 left-10" /> */}
            {/* <CogContainer positionClass="top-60 left-10" /> */}

            {/* Main Content */}
            <div className={`relative flex flex-col justify-center items-center text-center w-full h-full z-10 text-blue-100 transition-opacity duration-1000
                            ${(isVisible) ? 'opacity-100' : 'opacity-0 invisible'}`}>
                <div className="text-xl md:text-3xl">
                    <p className="text-3xl md:text-8xl font-bold">Joshua Micah Sullivan</p>
                    <p className="text-shadow-lg">Incoming STEP Intern @ Google</p>
                    <p>Computer Science @ UCI</p>

                </div>

                <img 
                    src="img/downarrow.svg"
                    alt="down arrow for portfolio" 
                    className="w-10 h-10 absolute bottom-24 animate-bounce cursor-pointer"
                    onClick={handleScrollDown}
                />
            </div>
        </div>
    );
};

// export default Landing;
