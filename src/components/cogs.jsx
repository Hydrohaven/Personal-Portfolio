const CogContainer = ({ positionClass }) => {
    const cog1Id = useId();
    const cog2Id = useId();
    const cog3Id = useId();
  
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; // Current scroll position
            const scrollHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
            const scrollPercentage = scrollTop / scrollHeight; // Scroll percentage
    
            // Rotate the cogs based on scroll percentage
            document.getElementById(cog1Id).style.transform = `rotate(${scrollPercentage * 360}deg)`;
            document.getElementById(cog2Id).style.transform = `rotate(-${scrollPercentage * 360 / 1.5}deg)`;
            document.getElementById(cog3Id).style.transform = `rotate(${scrollPercentage * 360 / 2}deg)`;
        };
  
        window.addEventListener("scroll", handleScroll);
  
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, [cog1Id, cog2Id, cog3Id]);
  
    return (
        <div className={`absolute ${positionClass} flex justify-center items-center`}>
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
                className="w-20 h-20 transform -ml-8"
                id={cog2Id}
                alt="Cog 2"
            />
            {/* Right Cog */}
            <img
                src="../img/cog1.svg"
                className="w-16 h-16 transform ml-8"
                id={cog3Id}
                alt="Cog 3"
            />
        </div>
    );
};