import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import localCardImage from "../../images/diving/localCard.webp"
import catalinaCardImage from "../../images/diving/catalinaCard.webp"
import dsdCardImage from "../../images/diving/dsdCard.webp"
import sdCardImage from "../../images/diving/sdCard.webp"
import owdCardImage from "../../images/diving/owdCard.webp"
import ExcursionCard from "../../components/ExcursionCardComponents/ExcursionCard"
import YouTube from "react-youtube"
import { Helmet } from "react-helmet"
const Index = () => {
  const opts = {
    height: "100%",
    width: "100%",
  }
  return (
    <Layout>
      <Helmet title="Diving" />

      <div className="w-screen max-w-lg flex flex-col my-5 items-center">
        <div className="relative w-screen max-w-lg h-56">
          <YouTube videoId="KvZT3etZIsw" opts={opts} className="h-full" />
        </div>
        <div className="flex flex-col items-center justify-center my-5">
          <Link to="/diving/discover" className="no-underline w-11/12">
            <ExcursionCard
              img={dsdCardImage}
              course={"Discover Scuba Diving"}
              price={"110"}
              description={
                "The perfect introduction for those who have never tried scuba diving before!"
              }
            />
          </Link>
          <Link to="/diving/scubadiver" className="no-underline w-11/12 ">
            <ExcursionCard
              img={sdCardImage}
              course={"Scuba Diver"}
              price={"360"}
              description={
                "Learn to dive under the direct supervision of a PADI professional to a maximum depth of 12 meters / 40 feet"
              }
            />
          </Link>
          <Link to="/diving/openwater" className="w-11/12 ">
            <ExcursionCard
              img={owdCardImage}
              course={"Open Water Diver"}
              price={"460"}
              description={
                "Learn to dive anywhere in the world with a certified buddy!"
              }
            />
          </Link>
          <Link to="/diving/localdiving" className="no-underline w-11/12">
            <ExcursionCard
              img={localCardImage}
              course={"Local Diving"}
              price={"100"}
              description={
                "The white beaches, lush vegetation and turquoise sea hide exciting adventures and beautiful seascapes. "
              }
            />
          </Link>
          <Link to="/diving/catalina" className="no-underline w-11/12 ">
            <ExcursionCard
              img={catalinaCardImage}
              course={"Catalina Island"}
              price={"209"}
              description={
                "Enjoy a day on the caribbean coast of the island, with its white sand and turquoise waters"
              }
            />
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index
