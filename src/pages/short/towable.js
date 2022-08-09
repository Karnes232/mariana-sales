import React from "react"
import Layout from "../../components/layout"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import { shortTours } from "../../data/shortTours"

import { FaWhatsapp } from "react-icons/fa"
const towable = () => {
  const tour = shortTours.find(tour => tour.pageName === "Towables")
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col my-5 items-center">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
          {tour.gallery.map((image, index) => (
            <div className="h-60" key={index}>
              <img src={image} alt="Great Big Mable / Banana Boat" />
            </div>
          ))}
        </Carousel>
        <div className="flex flex-col items-center justify-center mt-5 space-y-2 mx-4">
          <h1 className="text-2xl font-semibold">{tour.pageName}</h1>
          <p className="text-sm text-gray-800 text-center">
            {tour.descriptionMain}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-y-1 mx-4">
          <h1 className="text-xl font-semibold">Trip Overview</h1>
          <h4 className="text-sm text-gray-500">Price: ${tour.price}</h4>
          <h4 className="text-sm text-gray-500">{tour.overview}</h4>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 mx-4 space-y-2">
          <p className="text-sm text-gray-800 text-center">
            {tour.descriptionSecondary}
          </p>
        </div>
        <a
          href={`https://api.whatsapp.com/send?phone=${process.env.PHONE_NUMBER}`}
          target="_blank"
          aria-label="Whatsapp"
          rel="noreferrer"
        >
          <button className="uppercase text-sm font-bold tracking-wide bg-[#25D366] text-gray-100 p-3 rounded-lg w-80 my-6 focus:outline-none focus:shadow-outline">
            WhatsApp
            <FaWhatsapp className="inline-block h-4 w-5 ml-1" />
          </button>
        </a>
      </div>
    </Layout>
  )
}

export default towable
