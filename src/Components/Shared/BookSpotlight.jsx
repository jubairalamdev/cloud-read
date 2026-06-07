import Image from "next/image";
import Link from "next/link";
import spotlight from "@/assets/spotlight.webp"

const BookSpotlight = () => {
  return (
    <section className="w-full bg-[#f7fff7] px-4 sm:px-6 relative overflow-hidden py-30">
      <div className="max-w-300 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-[#4ecdc4]/20 rounded-full blur-3xl -z-10"></div>
          
          <Image
            src={spotlight}
            width={512}
            height={800}
            alt="Spotlight"
            className="md:h-124 object-cover rounded-xl shadow-2xl transform transition-transform duration-500"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div className="inline-block">
            <span className="text-[#4ecdc4] font-bold uppercase tracking-[0.2em] text-xs sm:text-sm border-b-2 border-[#4ecdc4] pb-1">
              The Midnight Library
            </span>
          </div>
          
          <p className="text-[#1a535c] font-medium text-sm sm:text-base leading-relaxed">
            THE NO. 1 SUNDAY TIMES BESTSELLER
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1a535c] leading-tight">
            The Midnight <br /> Library
          </h2>
          <p className="text-lg font-medium text-[#1a535c]/80">
            by Matt Haig
          </p>
          <p className="text-[#1a535c]/70 text-base sm:text-lg leading-8 font-light max-w-lg">
            {`Nora's`} life has been going from bad to worse. Then at the stroke of midnight on her last day on earth she finds herself transported to a library.
          </p>
          <div className="pt-4">
            <Link href="/book/13">
              <button className="bg-[#ff6b6b] hover:bg-[#e05e5e] text-white font-bold py-3.5 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                VIEW DETAILS
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookSpotlight;