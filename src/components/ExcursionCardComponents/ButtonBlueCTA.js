import React from "react"

const ButtonBlueCTA = ({ phoneNumber, text, color, icon }) => {
    
  return (
    <a
      href={phoneNumber}
      target="_blank"
      aria-label="Contact Me"
      rel="noreferrer"
    >
      <button
        className={`uppercase text-sm font-bold tracking-wide bg-[#0c16d9] text-gray-100 p-3 rounded-lg w-80 mb-3  focus:outline-none focus:shadow-outline visited:bg-[#0c16d9] hover:bg-[#0c16d9]`}
      >
        {text}
        {icon}
      </button>
    </a>
  )
}

export default ButtonBlueCTA
