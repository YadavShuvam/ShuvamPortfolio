import React from 'react';
import profile from '@/app/assets/profile.jpg';
import Image from 'next/image';
import { name, field, shortBio, socialLinks } from '../constant/data';
import IconGitHub from '../assets/icons/github';
import IconInstagram from '../assets/icons/instagram';

function Hero() {
    return (
        <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center p-5'>
            {/* User Info Section */}
            <div className='user-info w-full md:w-[75%] text-center md:text-left'>
                <p className='text-white text-3xl sm:text-4xl md:text-heading2 font-bold font-sans tracking-tight'>
                    {name}
                </p>
                <p className='text-lightest-slate text-xl sm:text-2xl md:text-heading font-medium font-sans tracking-tight mt-2'>
                    {field}
                </p>
                <p className="mt-4 w-full md:w-[75%] text-slate text-base sm:text-lg md:text-xxl whitespace-pre-line">
                    {shortBio}
                </p>
                {/* Social Icons */}
                <div className='icons flex flex-row justify-center md:justify-start mt-6 gap-4'>
                    <a
                        href={socialLinks.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-7 w-7 hover:text-green text-slate transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <IconGitHub />
                    </a>
                    <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-7 w-7 hover:text-green text-slate transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <IconInstagram />
                    </a>
                </div>
                {/* Big Button (Visible on Medium Screens and Above) */}
                <a
                    href={socialLinks.gitHub}
                    className="bigButton mt-8 w-fit hidden sm:inline-block px-6 py-3 border border-green text-green rounded hover:bg-green/10 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>Check out projects</div>
                </a>
            </div>

            {/* Profile Image Section */}
            <div className="image w-[40%] sm:w-[40%] md:w-[20%] mt-8 md:mt-0 imgg">
                <Image
                    src={profile.src}
                    className='w-full h-full object-cover img '
                    alt="Profile"
                />
            </div>
        </div>
    );
}

export default Hero;
