import React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <>
      <Link to="/" className="no-underline">
        <div className="flex items-center w-16 h-14 cursor-pointer">
          <StaticImage
            src="../../images/logo.jpg"
            loading="eager"
            width={64}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </div>
      </Link>
    </>
  )
}

export default Logo
