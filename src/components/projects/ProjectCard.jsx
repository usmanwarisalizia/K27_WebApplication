import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row w-full h-full gap-4">
                {/* First Image */}
                <div className="w-full lg:w-1/2 group transition-all relative rounded-none hover:rounded-[40px] overflow-hidden h-[300px] sm:h-[400px] lg:h-full">
                    <img
                        className="h-full w-full object-cover"
                        src={props.image1}
                        alt=""
                    />
                    <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/25">
                        <h2
                            className="uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-[font1] border-2 sm:border-4 pt-2 sm:pt-4 px-4 sm:px-8 text-white border-white rounded-full"
                            translate="no"
                        >
                            Voir le projet
                        </h2>
                    </div>
                </div>

                {/* Second Image */}
                <div className="w-full lg:w-1/2 group transition-all relative rounded-none hover:rounded-[40px] overflow-hidden h-[300px] sm:h-[400px] lg:h-full">
                    <img
                        className="h-full w-full object-cover"
                        src={props.image2}
                        alt=""
                    />
                    <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/25">
                        <h2
                            className="uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-[font1] border-2 sm:border-4 pt-2 sm:pt-4 px-4 sm:px-8 text-white border-white rounded-full"
                            translate="no"
                        >
                            Voir le projet
                        </h2>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectCard