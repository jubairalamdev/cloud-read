import React from 'react';
import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
    const newBooks = [
        "New Arrivals:",
        "Project Hail Mary",
        "Dune",
        "The Midnight Library",
        "Atomic Habits",
        "Special Discount on Memberships",
    ];

    return (
        <div className="w-full bg-linear-180 from-transparent to-[#1a535c] py-6 shadow-inner relative overflow-hidden -mt-27">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#4ecdc4] to-transparent opacity-50"></div>

            <Marquee
                gradient={false}
                speed={40}
                pauseOnHover={true}
                className="py-2"
            >
                {newBooks.map((book, index) => (
                    <div 
                        key={index} 
                        className="flex items-center mx-8 space-x-4 group cursor-pointer"
                    >
                        <span className="text-[#ff6b6b] text-5xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                            ✦
                        </span>
                        <span className="text-[#f7fff7] font-serif text-lg md:text-5xl tracking-wide group-hover:text-[#4ecdc4] transition-colors duration-300">
                            {book}
                        </span>
                    </div>
                ))}
            </Marquee>
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#4ecdc4] to-transparent opacity-50"></div>
        </div>
    );
};

export default HomeMarquee;