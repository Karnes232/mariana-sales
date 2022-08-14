import React from "react"
import Layout from './layout'

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import { FaWhatsapp } from "react-icons/fa"
const TourLayout = ({tour}) => {
  const phoneNumber='18296405433'
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col my-5 items-center">
      
      {tour.gallery && 
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
          {tour.gallery.map((image, index) => (
            <div className="h-60" key={index}>
              <img src={image} alt="Parasailing" />
            </div>
          ))}
        </Carousel>
        }
        <div className="flex flex-col items-center justify-center mt-5 space-y-2 mx-4">
        <a
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
          target="_blank"
          aria-label="Whatsapp"
          rel="noreferrer"
        >
          <button className="uppercase text-sm font-bold tracking-wide bg-[#25D366] text-gray-100 p-3 rounded-lg w-80 my-1 focus:outline-none focus:shadow-outline">
            WhatsApp
            <FaWhatsapp className="inline-block h-4 w-5 ml-1" />
          </button>
        </a>
        {tour.pageName && 
          <h1 className="text-2xl font-semibold">{tour.pageName}</h1>}
          {tour.descriptionMain && <p className="text-sm text-gray-800 text-center">
            {tour.descriptionMain}
          </p> }
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-y-1 mx-4">
          <h1 className="text-xl font-semibold">Trip Overview</h1>
          {tour.price && <h4 className="text-sm text-gray-500">Price: ${tour.price}</h4> }
          {tour.price2 && <h4 className="text-sm text-gray-500">Price: ${tour.price2}</h4> }
          {tour.price3 && <h4 className="text-sm text-gray-500">Price: ${tour.price3}</h4> }
          {tour.overview && <h4 className="text-sm text-gray-500">{tour.overview}</h4>}
        </div>
        <div className="flex flex-col items-center justify-center mt-5 mx-4 space-y-2">
        {tour.descriptionSecondary && <p className="text-sm text-gray-800 text-center">
            {tour.descriptionSecondary}
          </p> }
        </div>
        <a
          href={`tel:${phoneNumber}`}
          target="_blank"
          aria-label="Whatsapp"
          rel="noreferrer"
        >
          <button className="uppercase text-sm font-bold tracking-wide bg-[#0c16d9] text-gray-100 p-3 rounded-lg w-80 my-6 focus:outline-none focus:shadow-outline">
            Call Me
            <FaWhatsapp className="inline-block h-4 w-5 ml-1" />
          </button>
        </a>
        <a
          href={`sms::${phoneNumber}`}
          target="_blank"
          aria-label="Whatsapp"
          rel="noreferrer"
        >
          <button className="uppercase text-sm font-bold tracking-wide bg-[#0c16d9] text-gray-100 p-3 rounded-lg w-80 mb-6  focus:outline-none focus:shadow-outline">
            Text Me
            <FaWhatsapp className="inline-block h-4 w-5 ml-1" />
          </button>
        </a>
      </div>
    </Layout>
  )
}

export default TourLayout
