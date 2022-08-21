import React from "react"

const ButtonGreenCTA = ({ phoneNumber, text, color, icon }) => {
    
  return (
    <a
      href={phoneNumber}
      target="_blank"
      aria-label="Contact Me"
      rel="noreferrer"
    >
      <button
        className={`uppercase text-sm font-bold tracking-wide bg-[#25D366] text-gray-100 p-3 rounded-lg w-80 mb-3  focus:outline-none focus:shadow-outline visited:bg-[#25D366] hover:bg-[#25D366]`}
      >
        {text}
        {icon}
      </button>
    </a>
  )
}

export default ButtonGreenCTA
