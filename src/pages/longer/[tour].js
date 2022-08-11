import React from "react"
import Layout from "../../components/layout"
import TourLayout from "../../components/TourLayout"

import { longerTours } from "../../data/longerTours"

const tour = () => {
  const tour = longerTours.find(tour => tour.link === window.location.pathname)

  return (
    <>
      {tour ? (<TourLayout tour={tour}/>): (<Layout></Layout>)}
    </>
    
  )
}

export default tour
