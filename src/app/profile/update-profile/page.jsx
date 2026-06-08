"use client"

import {updateSession} from '@/lib/UpdateSession/updateSession';

const profileUpdatePage = () => {

    return (
        <div className="flex items-center justify-center bg-[#f7fff7] px-4 pt-35 pb-20">
            <form
                className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-[#1a535c]/10 space-y-5"
                action={updateSession}
            >

                {/* Header */}
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-serif font-bold text-[#1a535c] mb-2">
                        Update Profile
                    </h2>
                    <p className="text-sm text-[#1a535c]/60">Update your essential data from here.</p>
                </div>

                {/* Name Input */}
                <div>
                    <label className="block text-sm font-bold text-[#1a535c] mb-2 ml-1">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full bg-[#f7fff7]/50 border border-[#1a535c]/20 rounded-xl px-4 py-3 text-[#1a535c] focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] focus:bg-white transition-all placeholder-[#1a535c]/40"
                    />
                </div>

                {/* Photo URL Input */}
                <div>
                    <label className="block text-sm font-bold text-[#1a535c] mb-2 ml-1">
                        Photo URL
                    </label>
                    <input
                        type="text"
                        name="photoUrl"
                        placeholder="https://example.com/photo.jpg"
                        className="w-full bg-[#f7fff7]/50 border border-[#1a535c]/20 rounded-xl px-4 py-3 text-[#1a535c] focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] focus:bg-white transition-all placeholder-[#1a535c]/40"
                    />
                </div>

                {/* Login Register Button */}
                <button
                    className="w-full bg-[#1a535c] hover:bg-[#e05e5e] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                    type='submit'
                >
                    Update Information
                </button>


            </form>
        </div>
    );
};

export default profileUpdatePage