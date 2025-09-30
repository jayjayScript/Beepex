"use client"
import React, { useState } from "react"
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
});

interface ForgotPasswordProps {
    setView: React.Dispatch<React.SetStateAction<"login" | "forgot" | "checkInbox" | "NewPassword">>
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ setView }) => {
    const [email, setEmail] = useState("")

    return (
        <div className="space-y-4">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className='w-full text-[14px] p-4 border-[1.6px] border-gray-300 rounded-[12px] focus:ring-[1.6px] focus:ring-[#004BF5] focus:border-transparent outline-0'
            />
            <button
                type="button"
                onClick={() => setView("checkInbox")}
                className={`w-full bg-[#004BF5] text-white text-[14px] py-[12px] mt-3 ${inter.className} px-[24px] leading-[150%] rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer`}
            >
                Send Reset Link
            </button>

            <button
                type="button"
                onClick={() => setView("login")}
                className="text-sm text-gray-600 mx-auto hover:underline flex justify-center cursor-pointer"
            >
                Back to Login
            </button>
            <button
                type="button"
                onClick={() => setView("NewPassword")}
                className="text-sm text-[#004BF5] hover:underline mt-4"
            >
                Simulate “Open Reset Link”
            </button>

        </div>
    )
}

export default ForgotPassword
