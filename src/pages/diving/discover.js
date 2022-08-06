import React from "react"
import Layout from "../../components/layout"
import { FaWhatsapp } from "react-icons/fa"

import YouTube from "react-youtube"

const discover = () => {
  const opts = {
    height: "100%",
    width: "100%",
  }
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center">
        <div className="relative w-screen max-w-lg h-56">
          <YouTube videoId="Ad5iorC7xlo" opts={opts} className="h-full" />
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-y-2 mx-4">
          <h1 className="text-2xl font-semibold">Discover Scuba Diving</h1>
          <h4 className="text-xl font-semibold italic text-gray-500">
            Experience the underwater world
          </h4>
          <p className="text-sm text-gray-800 text-center">
            If you would like to give diving a try, but don’t really know if
            you’re going to like it, or simply don’t want to invest a lot of
            time in a full course, we are pleased to offer a number of options
            that let you get your hair wet and experience the underwater world.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-y-1 mx-4">
          <h1 className="text-xl font-semibold">Course Overview</h1>
          <h4 className="text-sm text-gray-500">Course Level: Beginner</h4>
          <h4 className="text-sm text-gray-500">Price: $110 per person</h4>
          <h4 className="text-sm text-gray-500">Duration: 2.5 Hours</h4>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 mx-4">
          <p className="text-sm text-gray-800 text-center">
            This is a half-day PADI program that offers you the experience of
            Scuba diving from 6 to a maximum of 12 meters, although it does not
            result in a certification, it can be credited as your first open
            water dive towards your PADI open water certification. This program
            is perfect for people who are interested in finding out what it is
            like to breath underwater and experience the underwater world.
          </p>
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
      </div>
    </Layout>
  )
}

export default discover
