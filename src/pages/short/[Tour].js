import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import TourLayout from "../../components/TourLayout"

import { shortTours } from "../../data/shortTours"
const Tour = () => {
  const [tour, setTour] = useState({})
  useEffect(() => {
    const tour = shortTours.find(tour => tour.link === window.location.pathname)
    setTour(tour)
  }, [])

  return <>{tour ? <TourLayout tour={tour} /> : <Layout></Layout>}</>
}

export default Tour
