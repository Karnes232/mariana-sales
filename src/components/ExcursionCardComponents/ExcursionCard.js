import React from "react"

const ExcursionCard = ({ img, course, price, description }) => {
  return (
    <div className="my-2 border rounded-lg">
      <img src={img} className="rounded-t-lg" alt={course} />
      <div className="mx-2 my-3 space-y-1">
        <h2 className="text-lg">{course}</h2>
        <h6 className="text-sm text-gray-500">${price}</h6>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}

export default ExcursionCard
