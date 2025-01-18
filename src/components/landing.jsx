const { useEffect } = React;

const generateUniqueId = (() => {
    let count = 0;
    return () => `cog-${count++}`;
})();

const Landing = () => {
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


    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Background Cogs */}
            {/* <CogContainer positionClass="top-10 left-10" /> */}
            {/* <CogContainer positionClass="top-60 left-10" /> */}

            {/* Main Content */}
            <div className="relative flex justify-center items-center text-center w-full h-full z-10 text-white hidden">
                <div className="text-3xl">
                    <p className="text-7xl">Joshua Micah Sullivan</p>
                    <p>Incoming STEP Intern @ Google</p>
                    <p>Computer Science @ UCI</p>
                </div>
            </div>
        </div>
    );
};

// export default Landing;
