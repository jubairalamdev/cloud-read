import 'animate.css';
import Link from "next/link";
import heroImage from '@/assets/hero-homepage.jpg';
import CustomButton from "./CustomButton";
import { SiPolkadot } from "react-icons/si";


const Hero = () => {
    const heroWrapperStyles = {
        backgroundImage: `
            linear-gradient(to bottom, rgba(26, 83, 92, 0.5), rgba(26, 83, 92, 0.85)),
            url(${heroImage.src})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <section
            className="relative w-full lg:min-h-170 min-h-screen lg:py-0 py-30  flex flex-col justify-center items-center px-4 sm:px-6 text-center"
            style={heroWrapperStyles}
        >
            <div className="max-w-4xl space-y-8">
                <div className="animate__animated animate__fadeInDown animate__delay-1s">
                    <button className="green-badge px-4 py-1 bg-green-500/30 border mx-auto border-green-300 text-green-300 rounded-full flex gap-2 items-center" >
                        <SiPolkadot />
                        New Books Available
                    </button>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#f7fff7] font-serif leading-tight drop-shadow-lg mt-4">
                        Find Your Next <span className="italic font-light text-violet-300">Read</span>
                    </h2>
                </div>
                
                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#f7fff7]/90 font-light leading-relaxed animate__animated animate__fadeInUp animate__delay-2s">
                    Welcome to your ultimate literary escape. Dive into curated collections, discover hidden gems, and track down your next favorite obsession.
                </p>
                
                <div className="pt-4 w-full flex justify-center animate__animated animate__fadeInUp animate__delay-3s">
                    <Link href="/books" className="max-auto">
                        <CustomButton value="Browse Now" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;