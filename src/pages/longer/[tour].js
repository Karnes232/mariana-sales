import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import TourLayout from "../../components/TourLayout"

import { longerTours } from "../../data/longerTours"

const tour = () => {
  const [tour, setTour] = useState({})
  useEffect(() => {
    
    const tour = longerTours.find(tour => tour.link === window.location.pathname)
    setTour(tour)
  }, [])
  

  return (
    <>
      {tour ? (<TourLayout tour={tour}/>): (<Layout></Layout>)}
    </>
    
  )
}

export default tour
