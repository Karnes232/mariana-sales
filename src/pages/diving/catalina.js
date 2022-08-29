import React from "react"
import Layout from "../../components/layout"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import catalina1 from "../../images/catalina/catalinaCard.webp"
import catalina2 from "../../images/catalina/Dominicana-Isla_Catalina2.webp"
import catalina3 from "../../images/catalina/pexels-leonardo-lamas-7001709.webp"
import catalina4 from "../../images/catalina/scubacaribe.webp"
import catalina5 from "../../images/catalina/seahorse-gda1528204_640.webp"
import catalina6 from "../../images/catalina/The_Aquarium,_Catalina_Island_.webp"
import ButtonBlueCTA from "../../components/ExcursionCardComponents/ButtonBlueCTA"
import ButtonGreenCTA from "../../components/ExcursionCardComponents/ButtonGreenCTA"
import { FaWhatsapp } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi"
import { BsChatLeftText } from "react-icons/bs"
import { email, phoneNumber } from "../../data/phoneNumber"
import { MdOutlineEmail } from "react-icons/md"
const catalina = () => {
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col my-5 items-center">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
          <div className="h-60">
            <img src={catalina1} alt="Catalina Island" />
          </div>
          <div className="h-60">
            <img src={catalina2} alt="Catalina Island" />
          </div>
          <div className="h-60">
            <img src={catalina3} alt="Catalina Island" />
          </div>
          <div className="h-60">
            <img src={catalina4} alt="Catalina Island" />
          </div>
          <div className="h-60">
            <img src={catalina5} alt="Catalina Island" />
          </div>
          <div className="h-60">
            <img src={catalina6} alt="Catalina Island" />
          </div>
        </Carousel>
        <div className="flex flex-col items-center justify-center mt-5 space-y-2 mx-4">
          <h1 className="text-2xl font-semibold">Catalina Island</h1>
          <p className="text-sm text-gray-800 text-center">
            It is a popular tourist destination and place frequented by some
            cruises ships of the Caribbean. Recommended activities on Catalina
            Island: snorkeling and diving, given the nature of its translucent
            waters and surrounded by live coral living in colorful fish. Isla
            Catalina, is an ideal option to take as an excursion if you are
            spending your vacations in La Romana, Punta Cana.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-y-1 mx-4">
          <h1 className="text-xl font-semibold">Trip Overview</h1>
          <h4 className="text-sm text-gray-500">Price: $209 per Diver</h4>
          <h4 className="text-sm text-gray-500">Price: $109 per Snorkeler</h4>
          <h4 className="text-sm text-gray-500">Duration: 7:30 - 17:30</h4>
          <h4 className="text-sm text-gray-500">
            Included: Lunch, Drinks, Transportation
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center my-5 mx-4 space-y-2">
          <p className="text-sm text-gray-800 text-center">
            THE WALL: This spectacular drop-off is definitely one of the best
            dive sites in the Dominican Republic. A gentle slope leads towards
            the wall. On the top reef you will enjoy the abundant marine life.
            Every square centimeter of this sea bed is covered with sponges and
            hard or soft coral. The depth of this terrace varies from 1.5 to 6
            meters. The drop-off is fully overgrown with coral and the crevices
            hide a tremendous amount of reef creatures. We restrict the depth
            even for advanced divers to 30 meters.
          </p>
          <p className="text-sm text-gray-800 text-center">
            THE AQUARIUM: The dive site is protected from the wind. Year round
            perfect conditions at the surface guarantee a very easy dive at
            about 12 meters depth. Incredibly healthy coral formations await you
            on the almost flat sandy bottom. Yellow stingrays, lobsters, moray
            eels, angelfish, grunts, snappers, soldier fish and trunkfish are
            only part of its attraction. Huge vase and barrel sponges hide stone
            crabs and “sea spiders”. You will see trumpet fish trying to blend
            in with the branches of soft coral formations.
          </p>
        </div>
        <ButtonBlueCTA
          phoneNumber={`mailto:${email}`}
          text="Email"
          icon={<MdOutlineEmail className="inline-block h-4 w-5 ml-1" />}
        />
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
    </Layout>
  )
}

export default catalina