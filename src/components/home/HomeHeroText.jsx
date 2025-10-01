import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
    return (
        <div
            className="font-[font1] mt-40 sm:mt-52 md:mt-64 lg:mt-0 pt-5 text-center px-4"
            translate="no"
        >
            {/* First line */}
            <div
                className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[9.5vw] flex justify-center items-center uppercase leading-[12vw] sm:leading-[10vw] md:leading-[8vw] lg:leading-[8vw]"
                translate="no"
            >
                L&apos;étincelle
            </div>

            {/* Second line with video */}
            <div
                className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[9.5vw] flex justify-center items-start uppercase leading-[12vw] sm:leading-[10vw] md:leading-[8vw] lg:leading-[8vw] flex-wrap gap-2"
                translate="no"
            >
                qui
                <div
                    className="h-[12vw] w-[28vw] sm:h-[10vw] sm:w-[20vw] md:h-[8vw] md:w-[16vw] lg:h-[7vw] lg:w-[16vw] rounded-full -mt-2 sm:-mt-3 overflow-hidden"
                    translate="no"
                >
                    <Video />
                </div>
                génère
            </div>

            {/* Third line */}
            <div
                className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[9.5vw] flex justify-center items-center uppercase leading-[12vw] sm:leading-[10vw] md:leading-[8vw] lg:leading-[8vw]"
                translate="no"
            >
                la créativité
            </div>
        </div>
    );
};

export default HomeHeroText;
