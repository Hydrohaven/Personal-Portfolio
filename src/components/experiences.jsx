const Experiences = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="inline-flex flex-col items-center gap-4 md:m-16 md:px-10 py-6 w-4/5">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Experiences</h1>

                <div className="flex flex-col rounded-lg w-full gap-12">
                    <ExperienceCard
                        company="Google"
                        role="STEP Intern"
                        date="June 2025 - Sep. 2025"
                        location="TBD, United States"
                        techstack="Techstack TBD"
                        logo="../img/logos/google.svg"
                        bullets={
                            [
                                "Incoming Summer 2025!!!", 
                            ]
                        }
                    />

                    <ExperienceCard
                        company="Commit the Change"
                        role="Full Stack Developer"
                        date="Oct. 2024 - Present"
                        location="Irvine, CA"
                        techstack="React • JavaScript • PostgreSQL • Express.js • ChakraUI • HTML/CSS"
                        logo="../img/logos/ctc-purple.svg"
                        bullets={
                            [
                                "Collaborated with a 14-person team to develop a platform for the non-profit organization Center Stage to promote and celebrate Chinese heritage in the US through traditional dance.", 
                                "Built responsive front-end features using React, improving class registration, attendance tracking efficiency, and elevating the user experience for students and instructors.",
                                "Engineered a RESTful API using Express and Node.js to seamlessly integrate the front-end with a PostgreSQL database, supporting real-time updates for over 200+ users.",
                                "Integrated a robust database schema in PostgreSQL to support efficient performance tracking and reporting, reducing manual effort and ensuring data integrity."
                            ]
                        }
                    />
                </div>
            </div>
        </div>
    );
};