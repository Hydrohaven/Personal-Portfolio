const ExperienceCard = ({company, role, date, location, techstack, logo, bullets}) => {
    return (
        <div className="flex flex-col md:flex-row items-center p-6 md:p-12 shadow-xl border-2 border-black rounded-lg md:hover:scale-105 transition-all duration-300">
            {/* Logo Section */}
            <div className="w-full md:w-1/3 flex justify-center items-center mr-12">
                <img className="w-3/4 mb-3 md:mb-0" src={logo}></img>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-2/3 flex flex-col gap-2">
                {/* Comapny Name + Date */}
                <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between items-center">
                    <h1 className="text-xl md:text-3xl font-bold">{company}</h1>
                    <span className="text-gray-600 text-base">{date}</span>
                </div>

                {/* Role + Location */}
                <div className="flex flex-col md:flex-row text-center md:text-left justify-between">
                    <h2 className="text-lg md:text-2xl font-semibold">{role}</h2>
                    <span className="text-gray-600 text-lg">{location}</span>
                </div>

                {/* TechStack + Bullet Points (Regular Text Block) */}
                <div>
                    <p className="text-gray-700 text-lg italic text-center md:text-left">{techstack}</p>
                    <ul className="list-disc pl-5 space-y-2 md:space-y-1 mt-3 text-black">
                        {bullets.map((bullet, index) => (
                            <li key={index} className="sm:text-sm md:text-base">{bullet}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};