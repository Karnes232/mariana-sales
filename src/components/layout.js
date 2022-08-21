/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./HeaderComponents/Header"

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col justify-center items-center bg-slate-200">
      <section className="w-screen max-w-lg bg-white">
        <Header />
        <div>
          <main className="max-w-lg h-screen bg-white">{children}</main>
        </div>
      </section>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
