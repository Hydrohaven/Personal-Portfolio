const ExperienceCard = ({company, role, date, location, techstack, logo, alt, bullets}) => {
    return (
        <div className="flex flex-col lg:flex-row items-center p-6 lg:p-12 shadow-xl border-2 border-black rounded-lg lg:hover:scale-105 transition-all duration-300">
            {/* Logo Section */}
            <div className="w-full lg:w-1/3 flex justify-center items-center lg:mr-12">
                <img className="w-3/4 mb-3 lg:mb-0" src={logo} alt={alt}></img>
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-2/3 flex flex-col gap-2">
                {/* Comapny Name + Date */}
                <div className="flex flex-col lg:flex-row text-center lg:text-left lg:justify-between items-center">
                    <h1 className="text-xl lg:text-2xl font-bold">{company}</h1>
                    <span className="text-gray-600 text-base">{date}</span>
                </div>

                {/* Role + Location */}
                <div className="flex flex-col lg:flex-row text-center lg:text-left justify-between">
                    <h2 className="text-lg lg:text-xl font-semibold">{role}</h2>
                    <span className="text-gray-600 text-base">{location}</span>
                </div>

                {/* TechStack + Bullet Points (Regular Text Block) */}
                <div>
                    <p className="text-gray-700 text-base italic text-center lg:text-left">{techstack}</p>
                    <ul className="list-disc pl-5 space-y-2 lg:space-y-1 mt-3 text-black">
                        {bullets.map((bullet, index) => (
                            <li key={index} className="text-sm">{bullet}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};