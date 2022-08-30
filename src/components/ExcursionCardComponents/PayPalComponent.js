import React, { useState } from "react"
import { Listbox } from "@headlessui/react"
import PayPalButtonComponent from "./PayPalButtonComponent"
import {
  PayPalScriptProvider
} from "@paypal/react-paypal-js";
const guestCount = [1, 2, 3, 4, 5, 6]
const PayPalComponent = ({ tour }) => {
  const [guests, setGuests] = useState(guestCount[0])
  const [price, setPrice] = useState(tour.price.split(" ")[0])
  const calculatePrice = guests => {
    setGuests(guests)
    const newPrice = tour.price.split(" ")[0] * guests
    setPrice(newPrice)
  }
  return (
    <>
      <Listbox value={guests} onChange={calculatePrice}>
        <Listbox.Button>Amount of Guests:</Listbox.Button>
        <Listbox.Label>
          {guests} - ${price}
        </Listbox.Label>
        <Listbox.Options>
          {guestCount.map(guests => (
            <Listbox.Option key={guests} value={guests}>
              {guests}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      <PayPalScriptProvider
            options={{
              "client-id": "AaPiNuBE-3bjn86CtDSbnbs5nnaeQ-vNhBk48DdMwZ0vsUYGVuE1_38burybKxv_Qn78gXQYUSKf1UG0",
              components: "buttons",
              currency: "USD",
            }}
          >
      <PayPalButtonComponent price={price} /></PayPalScriptProvider>
    </>
  )
}

export default PayPalComponent
