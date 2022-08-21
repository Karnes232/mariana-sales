import React from "react"
import { FaWhatsapp } from "react-icons/fa"

const ButtonCTA = ({ phoneNumber, text, color }) => {
  return (
    <a
      href={phoneNumber}
      target="_blank"
      aria-label="Contact Me"
      rel="noreferrer"
    >
      <button
        className={`uppercase text-sm font-bold tracking-wide bg-[${color}] text-gray-100 p-3 rounded-lg w-80 mb-3  focus:outline-none focus:shadow-outline`}
      >
        {text}
        <FaWhatsapp className="inline-block h-4 w-5 ml-1" />
      </button>
    </a>
  )
}

export default ButtonCTA
