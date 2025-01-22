const ProjectCard = ({title, date, techstack, image, alt, href, offset, tooltip}) => {
    return (
        <div className={`border-2 rounded-lg border-black lg:h-96 shadow-xl md:hover:scale-105 transition-all duration-300 ${(offset) ? 'mt-10' : ''}`}>
            {/* Image Section */}
            <div className="relative h-3/5 flex items-center justify-center">
                <img src={image} alt={alt} className="rounded-t-md w-full h-full object-cover"/>
            </div>
            
            {/* Project Details */}
            <div className="border-black border-t-2 p-6 lg:pb-0 h-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <h2 className="text-2xl font-semibold"> 
                        {title}
                        <span class="relative group cursor-help hidden md:inline">    
                            {(tooltip) ? 
                                <>
                                    <span class={`${(tooltip) ? 'underline decoration-dotted' : ''}`}>*</span>
                                    <span class="absolute left-0 bottom-6 hidden group-hover:block w-max bg-gray-800 text-white text-xs rounded-md p-2">{tooltip}</span>
                                </> : null
                            }
                        </span>
                        <a href={href} target="_blank"> <i class="fas fa-external-link"></i></a>
                    </h2>

                    <p className="italic text-gray-600 text-base">{date}</p>
                </div>

                <p className="flex text-center md:text-left justify-center md:justify-normal text-gray-700 mt-2">{techstack}</p>
            </div>
        </div>
    );
};
