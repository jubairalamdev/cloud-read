"use client"

import { loginUser } from '@/lib/authentication/loginUser';
// import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex items-center justify-center bg-[#f7fff7] px-4 pt-35 pb-20">
            <form
                className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-[#1a535c]/10 space-y-5"
                action={loginUser}
            >

                {/* Header */}
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-serif font-bold text-[#1a535c] mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-sm text-[#1a535c]/60">Join our literary community</p>
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-sm font-bold text-[#1a535c] mb-2 ml-1">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="w-full bg-[#f7fff7]/50 border border-[#1a535c]/20 rounded-xl px-4 py-3 text-[#1a535c] focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] focus:bg-white transition-all placeholder-[#1a535c]/40"
                    />
                </div>

                {/* Password Input */}
                <div className="relative">
                    <label className="block text-sm font-bold text-[#1a535c] mb-2 ml-1">
                        Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Create a password"
                        className="w-full bg-[#f7fff7]/50 border border-[#1a535c]/20 rounded-xl px-4 py-3 pr-12 text-[#1a535c] focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] focus:bg-white transition-all placeholder-[#1a535c]/40"
                    />
                </div>
                
                {/* Show Password */}
                <span
                    className='text-gray-600 flex gap-1 items-center mb-3 -mt-3 hover:underline w-fit cursor-pointer'
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <FaEye /> show Password
                </span>

                {/* Checkbox */}
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="terms"
                        className="w-5 h-5 accent-[#4ecdc4] cursor-pointer"
                        required
                    />
                    <label className="text-sm text-[#1a535c]/70 cursor-pointer select-none">
                        Accept Terms & Conditions
                    </label>
                </div>

                {/* Register Button */}
                <button
                    className="w-full bg-[#1a535c] hover:bg-[#e05e5e] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                    type='submit'
                >
                    Login
                </button>

                {/* Footer Link */}
                <div className="text-center pt-2">
                    <p className="text-sm text-[#1a535c]/60">
                        No Account?{" "}
                        <Link href="/register" className="text-[#4ecdc4] font-bold hover:underline">
                            Register
                        </Link>
                    </p>
                </div>

            </form>
        </div>
    );
};

export default LoginPage