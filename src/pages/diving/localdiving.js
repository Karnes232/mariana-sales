import React, { useState } from "react"

import Layout from "../../components/layout"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import localdiving1 from "../../images/local/dive1.webp"
import localdiving2 from "../../images/local/dive2.webp"
import localdiving3 from "../../images/local/diving-ga6ee93e48_640.webp"
import localdiving4 from "../../images/local/eel-g56837cb99_640.webp"
import localdiving5 from "../../images/local/turtle-g8f13fe5dc_640.webp"
import { Link } from "gatsby"
import { FaWhatsapp } from "react-icons/fa"
import ButtonBlueCTA from "../../components/ExcursionCardComponents/ButtonBlueCTA"
import { FiPhoneCall } from "react-icons/fi"
import ButtonGreenCTA from "../../components/ExcursionCardComponents/ButtonGreenCTA"
import { BsChatLeftText } from "react-icons/bs"
import { phoneNumber } from "../../data/phoneNumber"
import { Helmet } from "react-helmet"
const Localdiving = () => {
  const [paid, setPaid] = useState(false)
  return (
    <Layout>
      <Helmet title="Local Diving" />
      {paid ? (
        <div className="w-screen max-w-lg flex flex-col my-5 items-center">
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
            <div className="h-60">
              <img src={localdiving1} alt="Diving" />
            </div>
            <div className="h-60">
              <img src={localdiving2} alt="Diving" />
            </div>
            <div className="h-60">
              <img src={localdiving3} alt="Diving" />
            </div>
            <div className="h-60">
              <img src={localdiving4} alt="Diving" />
            </div>
            <div className="h-60">
              <img src={localdiving5} alt="Diving" />
            </div>
          </Carousel>
          <div className="flex flex-col items-center justify-center mt-5 space-y-2 mx-4">
            <h1 className="text-2xl font-semibold">Scuba Diving in Bavaro</h1>
            <p className="text-sm text-gray-800 text-center">
              Punta Cana features the longest reef in the country stretching
              north to Bavaro. You will find a great variety of dive sites from
              shallow coral reefs, wrecks, caves and canyons
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-5 space-y-1 mx-4">
            <h1 className="text-xl font-semibold">Trip Overview</h1>
            <h4 className="text-sm text-gray-500">Price: $100 per Diver</h4>
            <h4 className="text-sm text-gray-500">Duration: 2.5 - 3 hrs</h4>
            <h4 className="text-sm text-gray-500">Included: 2 local dives</h4>
          </div>
          <div className="flex flex-col items-center justify-center my-5 mx-4 space-y-2">
            <p className="text-sm text-gray-800 text-center">
              To dive as a certificate it is necessary to be able to show their
              certification whenever requested (physically or digitally). Also,
              if you have not dived for two years or more, you will need to do a
              Refresh program in the pool, at least the day before the
              excursion.
            </p>
            <p className="text-sm text-gray-800 text-center">
              If you are not yet certified, you can choose between the{" "}
              <Link
                to="/diving/discover"
                className="no-underline text-blue-600"
              >
                DSD (Discover Scuba Diving)
              </Link>{" "}
              program or a{" "}
              <Link
                to="/diving/openwater"
                className="no-underline text-blue-600"
              >
                PADI diving course.
              </Link>
            </p>
            <p className="text-sm text-gray-800 text-center">
              Also from Bávaro you can organize dives to the Caribbean side of
              the island. You can combine with the family or people who do not
              dive the excursion to{" "}
              <Link
                to="/diving/catalina"
                className="no-underline text-blue-600"
              >
                Catalina Island
              </Link>
              , where you can enjoy diving in a coral wall and reef.
            </p>
          </div>
          <ButtonBlueCTA
            phoneNumber={`tel:+${phoneNumber}`}
            text="Call Me"
            icon={<FiPhoneCall className="inline-block h-4 w-5 ml-1" />}
          />
          <ButtonGreenCTA
            phoneNumber={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
            text="WhatsApp"
            icon={<FaWhatsapp className="inline-block h-4 w-5 ml-1" />}
          />
          <ButtonBlueCTA
            phoneNumber={`sms::+${phoneNumber}`}
            text="Text Me"
            icon={<BsChatLeftText className="inline-block h-4 w-5 ml-1" />}
          />
          <div className="my-2"></div>
        </div>
      ) : (
        <div className="bg-image-tacano w-screen max-w-lg "></div>
      )}
    </Layout>
  )
}

export default Localdiving
