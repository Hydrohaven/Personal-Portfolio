const About = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="inline-flex flex-col items-center gap-4 m-6 md:m-16 md:mb-0 md:px-10 py-6 w-fit xl:w-3/5">
                <h1 className="text-4xl md:text-5xl font-bold md:mb-2">About Me</h1>
                <div className="flex flex-col md:flex-row gap-6 text-xl mt-2 mx-4 p-4 md:p-8 shadow-xl border-2 border-black rounded-lg md:scale-105 md:hover:scale-110 transition-all duration-300">
                    <div className="flex justify-center items-center">
                        <img src="./img/me.jpg" alt="A picture of myself!" className="rounded-lg"></img>
                    </div>

                    <div className="flex flex-col gap-4 text-base px-4 md:px-0 pb-4 md:pb-0">
                        <p>
                            Yo I'm Josh, a second year at UCI majoring in CS and specializing in Systems Programming.
                            All my projects stem from some sort of issue I encounter, leading me to create an application to solve it,
                            hoping others do as well.  
                        </p>

                        <p>
                            My main interests in CS revolve around conversational AI and just about anything involved
                            with voice recognition or speech-related technology. I find "talking" to a machine extremely
                            fascinating.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};