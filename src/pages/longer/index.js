import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import ExcursionCard from "../../components/ExcursionCardComponents/ExcursionCard"
import YouTube from "react-youtube"

import speedboatCardImage from "../../images/speedboat/speedboat4.webp"
import scubadooCardImage from "../../images/scubadoo/scubadoo3.webp"

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
        <div className="flex flex-col items-center justify-center my-5">
          <Link to="/longer/speedboat" className="no-underline w-11/12">
            <ExcursionCard
              img={speedboatCardImage}
              course={"Speedboat"}
              price={"120"}
              description={
                "Take the wheel of your own speed boat along the coastline of Bavaro Beach "
              }
            />
          </Link>
          <Link to="/longer/scubadoo" className="no-underline w-11/12">
            <ExcursionCard
              img={scubadooCardImage}
              course={"ScubaDoo"}
              price={"70"}
              description={
                "TDrive an underwater scooter along the seabed of Punta Cana with this incredible Scuba Doo activity"
              }
            />
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default index
