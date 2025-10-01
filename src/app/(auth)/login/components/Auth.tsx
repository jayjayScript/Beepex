"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import cardBg from "@/assets/img/image copy.png"
import logo from "../../../../../public/no-text-logo.png"
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import CheckInbox from "./CheckInbox"
import NewPassword from "./NewPassword"

const Auth = () => {
  const [view, setView] = useState<
  "login" | "forgot" | "checkInbox" | "NewPassword"
>("login")

  const pageHeaders = {
    login: {
      title: "Welcome Admin",
      text: "Log in to access the Deepex dashboard, manage users, transactions, and gift card operations"
    },
    forgot: {
      title: "Forgot your password?",
      text: "Enter your registered email address and we’ll send you a link to reset your password"
    },
    checkInbox: {
      title: "Check your inbox",
      text: "We’ve sent a password reset link to your email. Click the link to set a new password and regain access to your dashboard"
    },
    NewPassword: {
      title: "Forgot your password?",
      text: "Create your new password here"
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 lg:px-0">
      <Image src={cardBg} alt="Background" fill className="object-cover" priority />

      <div className="bg-[#FFF] px-4 pt-[30px] md:pb-30 md:pt-[90px] md:px-[90px] border-t-[1px] border-[#EAECF0] rounded-[24px] mx-2 sm:mx-4 w-full max-w-[720px] h-auto md:h-[665px] z-50 flex items-center justify-center">
        {/* Header */}
        <AnimatePresence mode="wait">
          <div>
            <header className="mb-4 text-center">
              <Image src={logo} width={60} height={60} className="mx-auto mb-[24px]" alt="beepex-no-text-logo" />
              <h2 className="text-[22px] sm:text-[24px] md:text-[26px] font-semibold mb-4 leading-[100%]">
                {pageHeaders[view].title}
              </h2>
              <p className="font-medium text-[12px] sm:text-[14px] text-[#000000B2]">
                {pageHeaders[view].text}
              </p>
            </header>

            {/* Animated Content */}
            {view === "login" && (
              <motion.div
                key="login"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Login setView={setView} />
              </motion.div>
            )}

            {view === "forgot" && (
              <motion.div
                key="forgot"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ForgotPassword setView={setView} />
              </motion.div>
            )}

            {view === "checkInbox" && (
              <motion.div
                key="checkInbox"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CheckInbox setView={setView} />
              </motion.div>
            )}
            {view === "NewPassword" && (
              <motion.div
                key="enterNewPassword"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <NewPassword setView={setView} />
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Auth
