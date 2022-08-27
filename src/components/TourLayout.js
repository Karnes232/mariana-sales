import React, { useState } from "react"
import Layout from "./layout"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { Listbox } from "@headlessui/react"
import { FaWhatsapp } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi"
import { BsChatLeftText } from "react-icons/bs"

import ButtonBlueCTA from "./ExcursionCardComponents/ButtonBlueCTA"
import ButtonGreenCTA from "./ExcursionCardComponents/ButtonGreenCTA"
import PayPalButton from "./ExcursionCardComponents/PayPalButtonComponent"

const guestCount = [
  1,2,3,4,5,6
]
const TourLayout = ({ tour }) => {
  const phoneNumber = "18296405433"
  const [guests, setGuests] = useState(guestCount[0])
  const [price, setPrice] = useState(tour.price)
  const calculatePrice = (guests) => {
    setGuests(guests)
    const newPrice = tour.price.split(" ")[0] * guests
    setPrice(newPrice)
  }
  console.log(guests)
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col my-5 items-center">
        {tour.gallery && (
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
            {tour.gallery.map((image, index) => (
              <div className="h-60 xs:h-72" key={index}>
                <img src={image} alt={tour.pageName} />
              </div>
            ))}
          </Carousel>
        )}
        <div className="flex flex-col items-center justify-center mt-5 space-y-2 mx-4">
          {tour.pageName && (
            <h1 className="text-2xl font-semibold">{tour.pageName}</h1>
          )}
          {tour.descriptionMain && (
            <p className="text-sm text-gray-800 text-center">
              {tour.descriptionMain}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-y-1 mx-4">
          <h1 className="text-xl font-semibold">Trip Overview</h1>
          {tour.price && (
            <h4 className="text-sm text-gray-500">Price: ${tour.price}</h4>
          )}
          {tour.price2 && (
            <h4 className="text-sm text-gray-500">Price: ${tour.price2}</h4>
          )}
          {tour.price3 && (
            <h4 className="text-sm text-gray-500">Price: ${tour.price3}</h4>
          )}
          {tour.overview && (
            <h4 className="text-sm text-gray-500">{tour.overview}</h4>
          )}
          {tour.paypal && (
            <>
          <Listbox value={guests} onChange={calculatePrice}>
          
            <Listbox.Button>Amount of Guests:</Listbox.Button>
            <Listbox.Label>{guests} - ${price}</Listbox.Label>
            <Listbox.Options>
              {guestCount.map(guests => (
                <Listbox.Option
                  key={guests}
                  value={guests}
                >
                  {guests}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
          <PayPalButton price={price} />
          </>
          )}
        </div>
        <div className="flex flex-col items-center justify-center my-5 mx-4 space-y-2">
          {tour.descriptionSecondary && (
            <p className="text-sm text-gray-800 text-center">
              {tour.descriptionSecondary}
            </p>
          )}
        </div>

        <ButtonBlueCTA
          phoneNumber={`tel:${phoneNumber}`}
          text="Call Me"
          icon={<FiPhoneCall className="inline-block h-4 w-5 ml-1" />}
        />
        <ButtonGreenCTA
          phoneNumber={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
          text="WhatsApp"
          icon={<FaWhatsapp className="inline-block h-4 w-5 ml-1" />}
        />
        <ButtonBlueCTA
          phoneNumber={`sms::${phoneNumber}`}
          text="Text Me"
          icon={<BsChatLeftText className="inline-block h-4 w-5 ml-1" />}
        />
        <div className="my-2"></div>
      </div>
    </Layout>
  )
}

export default TourLayout
