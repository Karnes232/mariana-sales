import React from "react"
import Layout from "../../components/layout"
import TourLayout from "../../components/TourLayout"


import { shortTours } from "../../data/shortTours"
const tour = () => {
  const tour = shortTours.find(tour => tour.link === window.location.pathname)

  return (
    <>
      {tour ? (<TourLayout tour={tour}/>): (<Layout></Layout>)}
    </>
    
  )
}

export default tour
