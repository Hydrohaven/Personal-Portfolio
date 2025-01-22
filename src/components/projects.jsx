const Projects = () => {
    /* Template 
    title: "",
    date: "",
    techstack: "•",
    image: "../img/",
    alt: "",
    href: "",
    */

    const projects = [
        {
            title: "Personal Portfolio",
            date: "Jan. 2025 - Present",
            techstack: "React • Tailwind CSS • Three.js • Babel.js",
            image: "./img/portfolio.png",
            alt: "Personal Portfolio Image",
            href: "",
            tooltip: "Ocean simulation courtesy of Three.js Official GitHub"
        },
        {
            title: 'μPlay',
            date: "Dec. 2024 - Present",
            techstack: "Python • Go • Hugging Face • Whisper • Porcupine • Electron • OpenCV • Spotify API",
            image: "./img/muplay.png",
            alt: "MuPlay Image",
            href: "https://github.com/Hydrohaven/MuPlay",
        },
        {
            title: "AntMemo",
            date: "June 2024 - Oct. 2024",
            techstack: "Python • Django • JavaScript • jQuery • SQL",
            image: "./img/antmemo.png",
            alt: "AntMemo Image",
            href: "https://github.com/Hydrohaven/antmemo",
            tooltip: "Still unpublished"
        },
        {
            title: "Lantern Light",
            date: "Aug. 2024",
            techstack: "GDScript • Godot • Aesprite",
            image: "./img/firefly1.png",
            alt: "Lantern Light Image",
            href: "https://tomasii.itch.io/lantern-light",
            tooltip: "Godot Wild Jam #72 submission with my bro Tomas Palmieri"
        },
        {
            title: "Yt-emb",
            date: "Nov. 2024 - Dec. 2024",
            techstack: "JavaScript • Chrome Extension • Chrome API",
            image: "./img/ytemb.png",
            alt: "Yt-emb Image",
            href: "https://chromewebstore.google.com/detail/yt-emb-quick-simple-youtu/bjlecdganfgddbcnnmioaingpljikoni",
            tooltip: "Icon courtesy of my brother, Aaron Sullivan"
        },
        {
            title: "Vocabulary Quiz App",
            date: "Feb. 2023 - Sep. 2023",
            techstack: "HTML • CSS • JavaScript",
            image: "./img/quizlet.png",
            alt: "Vocabulary Quiz App Image",
            href: "https://hydrohaven.github.io/Quizlet/",
        },
        {
            title: "ScreenCap",
            date: "Dec. 2022 - Apr. 2023",
            techstack: "Java • JavaFX",
            image: "./img/screencap.png",
            alt: "ScreenCap Image",
            href: "https://github.com/Hydrohaven/ScreenCap/releases/tag/v2.2-beta",
        },
        {
            title: "MuPlay-Prototype",
            date: "Aug. 2022 - Oct. 2022",
            techstack: "Java • CMUSphinx4 • Java Swing • JavaFX",
            image: "./img/muplay-proto.png",
            alt: "MuPlay-Prototype Image",
            href: "https://github.com/Hydrohaven/MuPlay-Prototype",
            tooltip: "The beginning of it all... The nostalgia this app holds..."
        }
    ];

    return (
        <div className="flex justify-center items-center">
            <div className="inline-flex flex-col items-center gap-4 m-6 md:m-16 md:px-10 py-6 w-4/5">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>

                {/* Normal View */}
                <div className="hidden md:grid grid-cols-1 xl:grid-cols-2 gap-x-12 w-full max-w-6xl">
                    {/* Left Section */}
                    <div> 
                        {projects.map((projectItem, index) =>
                            (index % 2 === 0) ? (
                                <ProjectCard
                                    key={index}
                                    title={projectItem.title}
                                    date={projectItem.date}
                                    techstack={projectItem.techstack}
                                    image={projectItem.image}
                                    alt={projectItem.alt}
                                    href={projectItem.href}
                                    offset={index !== 0} // first item in left is first bro
                                    tooltip={projectItem.tooltip}
                                />
                            ) : null
                        )}
                    </div>

                    {/* Right Section */}
                    <div className="sm:mt-10 lg:mt-16"> 
                        {projects.map((projectItem, index) =>
                            (index % 2 !== 0) ? (
                                <ProjectCard
                                    key={index}
                                    title={projectItem.title}
                                    date={projectItem.date}
                                    techstack={projectItem.techstack}
                                    image={projectItem.image}
                                    alt={projectItem.alt}
                                    href={projectItem.href}
                                    offset={index !== 1} // first item in right is second bro
                                    tooltip={projectItem.tooltip}
                                />
                            ) : null
                        )}
                    </div>
                </div>

                {/* Mobile View */}
                <div className="grid md:hidden grid-cols-1 gap-x-12 w-full max-w-6xl">
                    <div>
                        {projects.map((projectItem, index) => 
                            (<ProjectCard
                                key={index}
                                title={projectItem.title}
                                date={projectItem.date}
                                techstack={projectItem.techstack}
                                image={projectItem.image}
                                alt={projectItem.alt}
                                href={projectItem.href}
                                offset={index !== 0} // first item in right is second bro
                                tooltip={projectItem.tooltip}
                            />)
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};
