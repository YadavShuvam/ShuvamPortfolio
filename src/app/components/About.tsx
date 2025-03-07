import React from 'react';
import { aboutStory } from '../constant/data';

function About() {
    return (
        <section id='about'>
            <div className="about-container mt-14 p-5">
                {/* Title Section */}
                <div className="title ml-5 sm:ml-10 md:ml-20">
                    <p className='text-white text-2xl sm:text-3xl md:text-xxl font-sans-inter font-semibold'>
                        ABOUT
                    </p>
                </div>

                {/* Story Section */}
                <div className="story ml-5 sm:ml-10 md:ml-20 mt-5 text-light-slate w-full md:w-[90%] lg:w-[72%]">
                    <p
                        className='mb-4 text-sm sm:text-base md:text-lg'
                        dangerouslySetInnerHTML={{ __html: aboutStory.firstParagraph }}
                    />
                    <p
                        className='mb-4 text-sm sm:text-base md:text-lg'
                        dangerouslySetInnerHTML={{ __html: aboutStory.secondParagraph }}
                    />
                    <p
                        className='mb-4 text-sm sm:text-base md:text-lg'
                        dangerouslySetInnerHTML={{ __html: aboutStory.thirdParagraph }}
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
