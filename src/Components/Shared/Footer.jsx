import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-small.png"
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaLocationDot, FaPhone, FaXTwitter, } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-full bg-[#1a535c] text-[#f7fff7]">
            <div className="max-w-300 mx-auto px-4 sm:px-6 py-16">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-sens font-bold tracking-tight mb-2">
                                <Link href="/" className="text-xl flex gap-4 font-bold text-blue-200 tracking-tight items-center">
                                    <Image
                                        src={logo}
                                        alt="logo"
                                        height={60}
                                    />
                                    <h3 className="text-2xl  leading-6">Cloud <br /> Read</h3>
                                </Link>
                            </h2>
                            <p className="text-[#f7fff7]/70 max-w-sm leading-relaxed">
                                Your digital gateway to endless stories. Discover, borrow, and dive into the world of literature from anywhere.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-6 text-sm font-medium">
                            <Link href="/" className="hover:text-[#4ecdc4] transition-colors">Home</Link>
                            <Link href="/books" className="hover:text-[#4ecdc4] transition-colors">All Books</Link>
                            <Link href="/" className="hover:text-[#4ecdc4] transition-colors">Privacy Policy</Link>
                        </div>
                        <div className="flex space-x-4 pt-2">
                            <div className="w-10 h-10 rounded-full bg-[#f7fff7]/10 hover:bg-[#4ecdc4] hover:text-[#1a535c] transition-all cursor-pointer flex items-center justify-center">
                                <FaLinkedinIn />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#f7fff7]/10 hover:bg-[#4ecdc4] hover:text-[#1a535c] transition-all cursor-pointer flex items-center justify-center">
                                <FaXTwitter />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#f7fff7]/10 hover:bg-[#4ecdc4] hover:text-[#1a535c] transition-all cursor-pointer flex items-center justify-center">
                                <FaFacebookF />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start space-y-4 text-white">
                        {/* Heading */}
                        <h4 className="font-bold text-xl tracking-wide">
                            Contact Us
                        </h4>

                        {/* Contact Links & Info */}
                        <div className="space-y-3 text-base">
                            {/* Email */}
                            <a
                                href="mailto:support@bookborrow.com"
                                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                            >
                                <FaEnvelope className="w-5 h-5 text-white" />
                                <span className=" text-gray-300">support@bookborrow.com</span>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+8801234567890"
                                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                            >
                                <FaPhone className="w-5 h-5 text-white" />
                                <span className=" text-gray-300">+880 1234-567890</span>
                            </a>

                            {/* Location */}
                            <div className="flex items-center gap-3">
                                <FaLocationDot className="w-5 h-5 text-white" />
                                <span className=" text-gray-300">Dhaka, Bangladesh</span>
                            </div>
                        </div>
                        <div className="flex flex-col mt-5 items-center md:items-start space-y-3">
                            <div className="flex items-center space-x-2 text-white">
                                <FaLocationDot className="w-4 h-4 text-[#4ecdc4]" />
                                <h4 className="font-bold uppercase tracking-wider text-lg">
                                    Our Location
                                </h4>
                            </div>
                            <p className=" leading-relaxed pl-0 md:pl-6 text-gray-300">
                                123 Library Avenue,<br />
                                Bookworm District,<br />
                                NY 10001
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-[#4ecdc4]">Drop us a line</h3>

                        <form
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-[#f7fff7]/60 mb-1 ml-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-[#f7fff7]/10 border border-[#f7fff7]/20 rounded-lg px-4 py-3 text-[#f7fff7] placeholder-[#f7fff7]/40 focus:outline-none focus:border-[#4ecdc4] focus:ring-1 focus:ring-[#4ecdc4] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-[#f7fff7]/60 mb-1 ml-1">
                                    Comment
                                </label>
                                <textarea
                                    rows="2"
                                    placeholder="Your message here..."
                                    className="w-full bg-[#f7fff7]/10 border border-[#f7fff7]/20 rounded-lg px-4 py-3 text-[#f7fff7] placeholder-[#f7fff7]/40 focus:outline-none focus:border-[#4ecdc4] focus:ring-1 focus:ring-[#4ecdc4] transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#4ecdc4] hover:bg-[#3dbdb5] text-[#1a535c] font-bold py-3 rounded-lg shadow-lg transition-all transform hover:scale-[1.02]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
                <div className="border-t border-[#f7fff7]/10 mt-12 pt-8 text-center text-sm text-[#f7fff7]/50">
                    &copy; {new Date().getFullYear()} Cloud Read. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;