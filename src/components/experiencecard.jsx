const ExperienceCard = ({company, role, date, location, techstack, logo, bullets}) => {
    return (
        <div className="flex items-center p-12 shadow-xl border-2 border-black rounded-lg hover:scale-105 transition-all duration-300">
            {/* Logo Section */}
            <div className="w-1/3 flex justify-center items-center">
                <img className="w-3/4 mr-6" src={logo}></img>
            </div>

            {/* Details Section */}
            <div className="w-2/3 flex flex-col gap-2">
                {/* Comapny Name + Date */}
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">{company}</h1>
                    <span className="text-gray-600 text-lg">{date}</span>
                </div>

                {/* Role + Location */}
                <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold">{role}</h2>
                    <span className="text-gray-600 text-lg">{location}</span>
                </div>

                {/* TechStack + Bullet Points (Regular Text Block) */}
                <div>
                    <p className="text-gray-700 text-lg italic">{techstack}</p>
                    <ul className="list-disc pl-5 space-y-1 mt-3 text-black">
                        {bullets.map((bullet, index) => (
                            <li key={index} className="text-base">{bullet}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};