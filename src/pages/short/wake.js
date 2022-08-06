import React from "react"
import Layout from "../../components/layout"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import wakeboardPhoto from "../../images/shortTours/wakeboard.webp"

import wakeboardPhoto3 from "../../images/shortTours/wakeboard3.webp"
import wakeboardPhoto4 from "../../images/shortTours/wakeboard4.webp"
import waterskiPhoto from "../../images/shortTours/waterski.webp"

import { FaWhatsapp } from "react-icons/fa"
const wake = () => {
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
          <div className="h-60">
            <img src={wakeboardPhoto4} alt="Wakeboard" />
          </div>
          <div className="h-60">
            <img src={wakeboardPhoto3} alt="Wakeboard" />
          </div>
          <div className="h-60">
            <img src={waterskiPhoto} alt="Waterski" />
          </div>
          <div className="h-60">
            <img src={wakeboardPhoto} alt="Wakeboard" />
          </div>
        </Carousel>
        <div className="flex flex-col items-center justify-center mt-5 space-y-2 mx-4">
          <h1 className="text-2xl font-semibold">Water Ski / Wake Board</h1>
          <p className="text-sm text-gray-800 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            ullam fugit rerum debitis amet illo sit explicabo? Corporis porro
            excepturi quisquam blanditiis, assumenda harum asperiores ratione.
            Sapiente hic corporis expedita nobis, dolorum debitis reiciendis,
            recusandae unde ea fugit libero, necessitatibus labore. Similique
            ipsum quo cum quam ipsam fuga. Esse sapiente fugiat deleniti quis
            culpa illum aliquid, dolores iste rerum! Ipsa laudantium labore
            impedit! Rem repudiandae, nisi voluptas laborum consequuntur eum
            consectetur perspiciatis sed, maxime, voluptatibus iusto iste
            dolores officia! Quod ea dolorem perspiciatis, voluptate fugiat ipsa
            cumque temporibus, facere harum ipsam aliquid voluptatem eligendi
            dolorum laborum soluta accusantium consequuntur. Eos.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-y-1 mx-4">
          <h1 className="text-xl font-semibold">Trip Overview</h1>
          <h4 className="text-sm text-gray-500">Price: $35 per Person</h4>
          <h4 className="text-sm text-gray-500">10 Minute Ride</h4>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 mx-4 space-y-2">
          <p className="text-sm text-gray-800 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            nostrum iure saepe consequatur nihil excepturi quo molestias nemo a
            in, fugiat natus minima, esse tempora! Ab at sequi eligendi id saepe
            velit eius quas quae quia ex, tempora veritatis architecto rerum
            nihil repudiandae ratione magnam a expedita, eaque, inventore ipsa
            eos! Cum dolor nam totam laborum pariatur placeat nesciunt veniam ex
            neque natus iure harum id suscipit nihil sed qui quibusdam, numquam
            a in veritatis fugit perferendis atque corrupti ipsum. Culpa
            quisquam nesciunt dolores beatae quasi doloremque nihil voluptate
            alias velit iusto. Ea illum, quibusdam quam veritatis assumenda
            saepe ad.
          </p>
          <p className="text-sm text-gray-800 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ducimus
            temporibus velit vero nobis? Excepturi similique hic, facilis
            obcaecati dolor aperiam nostrum! Sit vero consectetur impedit cum
            voluptate, maxime blanditiis iure aliquid praesentium voluptates
            quod, culpa dolores asperiores, veritatis dolore laborum ullam
            cupiditate voluptatum corporis quam. Quae repellendus ea animi.
            Deleniti eum nulla blanditiis, quidem recusandae excepturi natus
            voluptas aperiam a! Libero dolorum unde commodi voluptatibus sunt
            dolorem exercitationem, error earum itaque rem officia molestias
            corporis iusto, laboriosam suscipit totam, nesciunt ratione nam
            eligendi. Nostrum a minus enim perferendis fugiat suscipit at rem
            aperiam, nulla, sint, consectetur ad ullam ducimus!
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

export default wake
