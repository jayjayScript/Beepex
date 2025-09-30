"use client"
import React, { useState } from "react"
import { Inter } from "next/font/google"
import { Eye, EyeOff } from "lucide-react"

const inter = Inter({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
  display: "swap"
})

interface ValidationRule {
  label: string
  test: (pwd: string) => boolean
}

type EnterNewPasswordProps = {
  setView: React.Dispatch<
    React.SetStateAction<"login" | "forgot" | "checkInbox" | "NewPassword">
  >
}

const NewPassword: React.FC<EnterNewPasswordProps> = ({ setView }) => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validationRules: ValidationRule[] = [
    { label: "Minimum of 8 characters", test: (pwd) => pwd.length >= 8 },
    { label: "Must have one uppercase", test: (pwd) => /[A-Z]/.test(pwd) },
    { label: "Must have one lowercase", test: (pwd) => /[a-z]/.test(pwd) },
    { label: "Must have one symbol", test: (pwd) => /[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]/.test(pwd) }
  ]

  const checks = validationRules.map((rule) => rule.test(password))
  const isValid = checks.every(Boolean)
  const passwordsMatch = password === confirmPassword && password.length > 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    if (isValid && passwordsMatch) {
      console.log("Password reset successful:", { password })
      setView("login")
    }
  }

  const getBorderClass = () => {
    if (!password && !confirmPassword) return "border-gray-300 focus:ring-[#004BF5]"
    if (passwordsMatch && isValid) return "border-green-400 focus:ring-green-500"
    if (!passwordsMatch && (password || confirmPassword)) return "border-red-400 focus:ring-red-500"
    return "border-gray-300 focus:ring-[#004BF5]"
  }

  return (
    <div className="">
      <form className="w-full space-y-2" onSubmit={handleSubmit}>
        {/* New Password Field */}
        <div className="relative">
          <label
            htmlFor="password"
            className="block text-[12px] sm:text-[14px] font-semibold mb-1"
          >
            Enter new password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsPasswordFocused(true)}
            placeholder="••••••••"
            className={`w-full text-[13px] sm:text-[14px] p-3 sm:p-4 rounded-[12px] outline-0 pr-12 border-[1.6px] transition-all ${getBorderClass()}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[60%] -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Confirm Password Field */}
        <div className="relative">
          <label
            htmlFor="confirmPassword"
            className="block text-[12px] sm:text-[14px] font-semibold mb-1"
          >
            Confirm new password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className={`w-full text-[13px] sm:text-[14px] p-3 sm:p-4 rounded-[12px] outline-0 pr-12 border-[1.6px] transition-all ${getBorderClass()}`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-[60%] -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Password Match Error */}
        {submitted && !passwordsMatch && (
          <p className="text-red-500 text-[11px] sm:text-[12px]">
            Passwords do not match
          </p>
        )}

        {/* Password Rules */}
        {password.length > 0 && isPasswordFocused && (
          <div className="space-y-1 sm:space-y-2">
            {validationRules.map((rule, index) => (
              <div
                key={index}
                className="flex items-center gap-2 transform transition duration-300 ease-in-out opacity-0 translate-y-2 animate-ruleFadeIn"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${checks[index] ? "bg-green-500" : "bg-red-500"}`}
                />
                <span className="text-[10px] sm:text-[12px] text-gray-500">
                  {rule.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid || !passwordsMatch}
          className={`w-full text-[13px] sm:text-[14px] py-[10px] sm:py-[12px] px-[20px] sm:px-[24px] mt-3 ${inter.className} leading-[150%] rounded-lg font-medium cursor-pointer transition-colors 
          ${isValid && passwordsMatch
              ? "bg-[#004BF5] text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Reset Password
        </button>

        {/* Back to Login */}
        <p
          className="text-xs sm:text-sm text-[#004BF5] hover:underline cursor-pointer text-center"
          onClick={() => setView("login")}
        >
          Back to Login
        </p>

        <style jsx>{`
          @keyframes ruleFadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-ruleFadeIn { animation: ruleFadeIn 0.3s forwards; }
        `}</style>
      </form>
    </div>
  )
}

export default NewPassword
