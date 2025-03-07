import React from 'react';
import { projects } from '../constant/data'; // Import the projects data

function Projects() {
    return (
        <section id='projects'>
            <div className="projects-container w-full md:w-[85%] mt-10 ml-5 sm:ml-10 md:ml-20 p-5">
                {/* Title Section */}
                <div className="title">
                    <p className='text-white text-2xl sm:text-3xl md:text-xxl font-sans font-semibold'>
                        PROJECTS
                    </p>
                </div>

                {/* Projects List */}
                <div className="projects-list mt-10 flex flex-col">
                    {projects.map((project, index) => (
                        <div key={index} className="project flex flex-col sm:flex-row gap-5 sm:gap-10 md:gap-52 mb-10">
                            {/* Image Section */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-48 flex-shrink-0"
                            >
                                <img
                                    src={typeof project.image === 'string' ? project.image : project.image.src}
                                    alt={project.title}
                                    className="w-full sm:w-48 h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                />
                            </a>

                            {/* Project Details Section */}
                            <div className="project-details flex flex-col flex-1">
                                <p className='text-white text-lg font-sans'>
                                    {project.title}
                                </p>
                                <p
                                    className='text-slate text-sm sm:text-md'
                                    dangerouslySetInnerHTML={{ __html: project.description }}
                                />
                                {/* Stacks Container */}
                                <div className="stacks mt-3 flex flex-wrap gap-2 sm:gap-4">
                                    {project.stack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className='stack'
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

export default Projects;
