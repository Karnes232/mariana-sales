import { Link } from "gatsby"
import React, { useState } from "react"
import Layout from "../../components/layout"
import ExcursionCard from "../../components/ExcursionCardComponents/ExcursionCard"
import YouTube from "react-youtube"

import { shortTours } from "../../data/shortTours"
import { Helmet } from "react-helmet"

const Index = () => {
  const opts = {
    height: "100%",
    width: "100%",
  }
  const [paid, setPaid] = useState(false)
  return (
    <Layout>
      <Helmet title="Quick Tours" />
      {paid ? (
        <div className="w-screen max-w-lg flex flex-col my-5 items-center">
          <div className="relative w-screen max-w-lg h-56">
            <YouTube videoId="zqUQn0QTCGE" opts={opts} className="h-full" />
          </div>
          <div className="flex flex-col items-center justify-center my-5">
            {shortTours.map((tour, index) => (
              <Link to={tour.link} className="no-underline w-11/12" key={index}>
                <ExcursionCard
                  img={tour.mainImg}
                  course={tour.name}
                  price={tour.price}
                  description={tour.description}
                />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-image-tacano w-screen max-w-lg "></div>
      )}
    </Layout>
  )
}

export default Index
