import React from "react"
import Layout from "../../components/layout"
import YouTube from "react-youtube"
import { FaWhatsapp } from "react-icons/fa"
import ButtonBlueCTA from "../../components/ExcursionCardComponents/ButtonBlueCTA"
import { FiPhoneCall } from "react-icons/fi"
import ButtonGreenCTA from "../../components/ExcursionCardComponents/ButtonGreenCTA"
import { BsChatLeftText } from "react-icons/bs"
import { phoneNumber } from "../../data/phoneNumber"
const scubadiver = () => {
  const opts = {
    height: "100%",
    width: "100%",
  }
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center">
        <div className="relative w-screen max-w-lg h-56">
          <YouTube videoId="qEzf4MjmowA" opts={opts} className="h-full" />
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-y-2 mx-4">
          <h1 className="text-2xl font-semibold">PADI Scuba Diver Course</h1>
          <h4 className="text-lg font-semibold italic text-gray-500 text-center">
            What can you expect from this beginner’s Scuba Diving course
          </h4>
          <p className="text-sm text-gray-800 text-center">
            This is a 2-day course where you learn basic dive theory and then
            you get to experience 2 training dives in the open water. After
            completing this course, you will have a certification to dive to 12
            meters / 40 feet under the supervision of a divemaster or
            instructor.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center my-5 space-y-1 mx-4">
          <h1 className="text-xl font-semibold">Course Overview</h1>
          <h4 className="text-sm text-gray-500">Course Level: Beginner</h4>
          <h4 className="text-sm text-gray-500">Price: $360 per person</h4>
          <h4 className="text-sm text-gray-500">
            Duration: 4 - 2.5 Hours sessions
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-y-2 mx-4">
          <p className="text-sm text-gray-800 text-center">
            The PADI E-Learning is a new product from PADI that makes the dive
            theory very easy to complete and can be downloaded on any Apple or
            Android device so you can study on your own time.
          </p>
          <p className="text-sm text-gray-800 text-center">
            On your first day of the course your instructor will do a review
            with you of your theory and then you will get acquainted with the
            equipment before starting the confined pool session.
          </p>
          <p className="text-sm text-gray-800 text-center">
            At this point you will do your confined water training at one of our
            pools, with small groups you can complete all of your confined water
            training in one day.
          </p>
          <p className="text-sm text-gray-800 text-center">
            In your confined water dives you will learn all you need to know in
            how to use scuba equipment and be able to handle yourself under
            water as well as being prepared for any situation in the open water.
            We prefer to take a little more time with you in the pool so that
            you are 100% comfortable when you go diving in the open water. Not
            only will you learn a lot, you will a have a lot of fun swimming
            around under water.
          </p>
          <h4 className="text-lg font-semibold">Open Water Dives</h4>

          <p className="text-sm text-gray-800 text-center">
            The open water portion of the course consists of 2 open water dives
            where you will perform various dive skills both under water and at
            the surface to make sure that you are a competent and safe diver. We
            break up the skills over the 2 dives so that you only are doing a
            few skills each dive and get to spend the majority of your time
            diving with your instructor and exploring the underwater world.
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
    </Layout>
  )
}

export default scubadiver
