import Link from "next/link";
import { FaBookAtlas } from "react-icons/fa6";

export default function NotFound() {
  return (
    <section className="bg-[#f7fff7] min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      
      {/* Decorative Background Elements */}
      {/* Large Faint "404" */}
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-bold text-[#1a535c]/5 -z-10 select-none">
        404
      </span>

      {/* Decorative Blob (matches previous designs) */}
      <div className="absolute top-1/4 left-1/4 max-w-32 h-32 bg-[#4ecdc4]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#ff6b6b]/10 rounded-full blur-3xl -z-10"></div>

      {/* Main Content */}
      <div className="text-center space-y-8 max-w-lg animate-in fade-in zoom-in-95 duration-500">
        
        {/* Icon / Illustration */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-[#4ecdc4]/20 rounded-full mb-2 shadow-inner">
          <FaBookAtlas 
            className="w-12 h-12 text-[#1a535c]" 
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1a535c]">
          Lost in the Stacks?
        </h1>

        {/* Description */}
        <p className="text-[#1a535c]/70 text-lg leading-relaxed">
          It looks like the page you were looking for has been misplaced on the shelf.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <Link href="/">
            <button className="bg-[#ff6b6b] hover:bg-[#e05e5e] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto">
              <span>Return Home</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}