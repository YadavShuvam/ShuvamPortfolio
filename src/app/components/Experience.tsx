import React from 'react';
import { experience } from '../constant/data';

function Experience() {
    return (
        <section id='Experience'>
            <div className="experience-container mt-10 ml-0 sm:ml-10 md:ml-20 p-5">
                {/* Title Section */}
                <div className="title">
                    <p className='text-white text-2xl sm:text-3xl md:text-xxl font-sans font-semibold'>
                        EXPERIENCE
                    </p>
                </div>

                {/* Experiences List */}
                <div className="experiences mt-10 flex flex-col">
                    {experience.map((exp, index) => (
                        <div key={index} className="experience flex flex-col sm:flex-row gap-5 sm:gap-10 md:gap-52 mb-10">
                            {/* Date Section */}
                            <div className="date text-light-slate font-mono font-semibold text-sm w-full sm:w-48 flex-shrink-0">
                                <p>{exp.date}</p>
                            </div>

                            {/* Experience Details Section */}
                            <div className="experience-details flex flex-col flex-1">
                                <p className='text-white text-lg font-sans'>{exp.title}</p>
                                <p
                                    className='text-slate text-sm sm:text-md'
                                    dangerouslySetInnerHTML={{ __html: exp.description }}
                                />
                                {/* Stacks Container */}
                                <div className="stacks mt-3 flex flex-wrap gap-2 sm:gap-4">
                                    {exp.stack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className='stack '
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
