"use client"
import React from "react"

interface CheckInboxProps {
  setView: React.Dispatch<React.SetStateAction<"login" | "forgot" | "checkInbox" | "NewPassword">>
}

const CheckInbox: React.FC<CheckInboxProps> = ({ setView }) => {
  return (
    <div className="space-y-4 text-center">
      <button
        type="button"
        onClick={() => setView("login")}
        className="text-[#004BF5] text-[14px] py-2 px-4 hover:underline cursor-pointer"
      >
        Back to Login
      </button>
    </div>
  )
}

export default CheckInbox
