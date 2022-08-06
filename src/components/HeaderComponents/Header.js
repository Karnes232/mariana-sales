import React from "react"

import Logo from "./Logo"
import Nav from "./Nav"

function Header() {
  return (
    <nav className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between bg-white mx-4">
        <Logo />

        <Nav />
      </div>
    </nav>
  )
}

export default Header
