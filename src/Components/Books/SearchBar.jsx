"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaMagnifyingGlass } from 'react-icons/fa6';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");
    const router = useRouter();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            router.push(`/books/search/${encodeURIComponent(inputValue.trim())}`);
        }
    };

    return (
        <form onSubmit={handleSearchSubmit} className="bg-white p-4 rounded-2xl shadow-sm mb-12 flex flex-col md:flex-row gap-4 border border-[#1a535c]/5">
            <div className="relative grow group">
                <button type="submit" className="absolute left-4 top-1/2 transform -translate-y-1/2 focus:outline-none">
                    <FaMagnifyingGlass className="w-5 h-5 text-[#1a535c]/40 group-focus-within:text-[#4ecdc4] transition-colors" />
                </button>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search for books by title and press Enter..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#f7fff7]/50 border border-[#1a535c]/10 text-[#1a535c] placeholder-[#1a535c]/40 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] focus:bg-white transition-all"
                />
            </div>
        </form>
    );
};

export default SearchBar;