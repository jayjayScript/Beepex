
"use client"
import React, { useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
});

interface ValidationRule {
    label: string;
    test: (pwd: string) => boolean;
}

type LoginProps = {
    setView: React.Dispatch<React.SetStateAction<"login" | "forgot" | "checkInbox" | "NewPassword">>
}

const Login: React.FC<LoginProps> = ({ setView }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isPasswordFocused, setIsPasswordFocused] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const validationRules: ValidationRule[] = [
        { label: "Minimum of 8 characters", test: (pwd) => pwd.length >= 8 },
        { label: "Must have one uppercase", test: (pwd) => /[A-Z]/.test(pwd) },
        { label: "Must have one lowercase", test: (pwd) => /[a-z]/.test(pwd) },
        { label: "Must have one symbol", test: (pwd) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd) }
    ];

    const checks = validationRules.map(rule => rule.test(password));
    const isValid = checks.every(Boolean);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        if (isValid && email.trim()) {
            console.log('Form submitted:', { email, password });
        }
    }

    return (
        <div>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email' className='block text-[13px] sm:text-[14px] font-semibold mb-2'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='deepex@thegmail.com'
                        className='w-full text-[14px] p-4 border-[1.6px] border-gray-300 rounded-[12px] focus:ring-[1.6px] focus:ring-[#004BF5] focus:border-transparent outline-0'
                    />
                    {submitted && !email.trim() && (
                        <p className="text-red-500 text-sm mt-1">Email is required</p>
                    )}
                </div>

                <div className='relative'>
                    <label htmlFor='password' className='block text-[13px] sm:text-[14px] font-semibold mb-2'>
                        Password
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setIsPasswordFocused(true)}
                        placeholder='••••••••'
                        className={`w-full text-[14px] p-4 border-[1.6px] border-gray-300 rounded-[12px] focus:ring-[1.6px] focus:ring-[#004BF5] focus:border-transparent outline-0 transition-all pr-12 ${password.length > 0 && !isValid
                            ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                            : 'border-gray-300 focus:ring-[#14BA6D] focus:border-[#14BA6D]'
                            }`}
                    />
                    <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-[44%] text-gray-400 hover:text-gray-600 cursor-pointer'
                    >
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            {showPassword ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                            ) : (
                                <svg>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                </svg>
                            )}
                        </svg>
                    </button>
                    <button
                        type="button"
                        onClick={() => setView("forgot")}
                        className="text-sm text-[#004BF5] hover:underline cursor-pointer"
                    >
                        Forgot Password?
                    </button>
                </div>

                {password.length > 0 && isPasswordFocused && (
                    <div className='space-y-2'>
                        {validationRules.map((rule, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-2.5 transform transition duration-300 ease-in-out opacity-0 translate-y-2 animate-ruleFadeIn`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {
                                    checks && <div className={`w-2 h-2 rounded-full flex items-center justify-center ${checks[index] ? 'bg-green-500' : 'bg-red-500'
                                        }`}>
                                    </div>
                                }
                                <span className={`text-[12px] text-gray-500`}>
                                    {rule.label}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                <button
                    type='submit'
                    className={`w-full bg-[#004BF5] text-white text-[14px] py-[12px] mt-3 ${inter.className} px-[24px] leading-[150%] rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer`}
                >
                    Log in to Dashboard
                </button>
            <style jsx>{`
        @keyframes ruleFadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-ruleFadeIn {
          animation: ruleFadeIn 0.3s forwards;
        }
      `}</style>
            </form>

        </div>
    )
}

export default Login