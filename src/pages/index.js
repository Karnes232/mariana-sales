import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  const [paid, setPaid] = useState(false)
  return (
    <Layout>
      <Helmet title="Mariana Caribbean Sports" />
      {paid ? (
        <div className="bg-image w-screen max-w-lg ">
          <Link to="/diving">
            <button className="bg-image__button top-[calc(50%-120px)] inline-block rounded-md text-center w-48 font-bold text-lg py-4 px-4 mb-20 text-white bg-sky-500 opacity-75 hover:opacity-100 hover:bg-blue-600">
              Scuba Diving
            </button>
          </Link>
          <Link to="/short">
            <button className="bg-image__button top-[50%] inline-block rounded-md text-center w-48 font-bold text-lg py-4 px-4 mb-20 text-white bg-sky-500 opacity-75 hover:opacity-100 hover:bg-blue-600">
              Short Excursions
            </button>
          </Link>
          <Link to="/longer">
            <button className="bg-image__button top-[calc(50%+120px)] inline-block rounded-md text-center w-48 font-bold text-lg py-4 px-4 mb-20 text-white bg-sky-500 opacity-75 hover:opacity-100 hover:bg-blue-600">
              Over 1 Hour
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-image-tacano w-screen max-w-lg "></div>
      )}
    </Layout>
  )
}

export default IndexPage
