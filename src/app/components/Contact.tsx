import React from "react";
import { email, contactDescription, name } from "../constant/data";

function Contact() {
    return (
        <section
            className="flex flex-col mt-16 items-center justify-center w-full"
            id="contacts"
        >
            <div className="text-center">

                <h2 className="font-calibre font-semibold text-heading text-lightest-slate whitespace-nowrap">
                    Get In Touch
                </h2>
                <div className="sm:w-[50%] w-[75%] py-5 sm:text-lg text-sm font-calibre text-slate mx-auto">
                    <p>{contactDescription}</p>
                </div>
                <a
                    href={`mailto:${email}`}
                    className="button w-fit mx-auto px-6 py-3 border border-green text-green rounded hover:bg-green/10 transition-colors"
                >
                    Say Hello
                </a>
                <div className="sm:mt-20 mt-16 font-mono text-xxs hover:text-green text-light-slate">
                    <p>Build & Designed by<br />{name}</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
