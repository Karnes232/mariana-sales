import React, { useState } from "react"
import { Listbox } from "@headlessui/react"
import PayPalButtonComponent from './PayPalButtonComponent'

const guestCount = [
    1,2,3,4,5,6
  ]
const PayPalComponent = ({tour}) => {
    const [guests, setGuests] = useState(guestCount[0])
  const [price, setPrice] = useState(tour.price.split(" ")[0])
  const calculatePrice = (guests) => {
    setGuests(guests)
    const newPrice = tour.price.split(" ")[0] * guests
    setPrice(newPrice)
  }
  return (
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
        <PayPalButtonComponent price={price} />
    </>
  )
}

export default PayPalComponent