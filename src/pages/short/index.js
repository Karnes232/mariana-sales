import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import ExcursionCard from "../../components/ExcursionCardComponents/ExcursionCard"
import YouTube from "react-youtube"
import mableCardImage from "../../images/shortTours/mable.webp"
import bananaCardImage from "../../images/shortTours/banana.webp"
import wakeboardCardImage from "../../images/shortTours/wakeboard3.webp"
import parasailingCardImage from "../../images/shortTours/parasailing2.webp"

const index = () => {
  const opts = {
    height: "100%",
    width: "100%",
  }
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col my-5 items-center">
        <div className="relative w-screen max-w-lg h-56">
          <YouTube videoId="zqUQn0QTCGE" opts={opts} className="h-full" />
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <Link to="/short/towable" className="no-underline w-11/12">
            <ExcursionCard
              img={mableCardImage}
              course={"Great Big Mable"}
              price={"15"}
              description={"The Great Big Mable is a classic towable"}
            />
          </Link>
          <Link to="/short/towable" className="no-underline w-11/12">
            <ExcursionCard
              img={bananaCardImage}
              course={"Banana Boat"}
              price={"15"}
              description={"The Banana Boat is a classic towable"}
            />
          </Link>
          <Link to="/short/wake" className="no-underline w-11/12">
            <ExcursionCard
              img={wakeboardCardImage}
              course={"Water Ski / Wakeboard"}
              price={"35"}
              description={"The Water Ski is a classic towable"}
            />
          </Link>
          <Link to="/short/parasailing" className="no-underline w-11/12">
            <ExcursionCard
              img={parasailingCardImage}
              course={"Parasailing"}
              price={"70"}
              description={"Parasailing!!!"}
            />
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default index
