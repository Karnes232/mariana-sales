import React from "react"

import HamburgerMenu from "./HamburgerMenu"

const Nav = () => {
  return (
    <div className="flex justify-end items-center space-x-8">
      <HamburgerMenu />
    </div>
  )
}

export default Nav
