import React from "react"
import Layout from "../components/layout"
import { PayPalButton } from "react-paypal-button-v2"
import { useEffect, useState } from "react"

const Paypal = ({ location }) => {
  const price = location.state.price
  const newPrice = price.split(" ")[0] || price

  return (
    <Layout>
      <div className="w-screen h-screen max-w-lg flex flex-col my-5 justify-center items-center">
       
          <PayPalButton
            amount={`${newPrice}`}
            shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              // OPTIONAL: Call your server to save the transaction
              return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                  orderId: data.orderID,
                }),
              })
            }}
            options={{
              clientId:
                "AaPiNuBE-3bjn86CtDSbnbs5nnaeQ-vNhBk48DdMwZ0vsUYGVuE1_38burybKxv_Qn78gXQYUSKf1UG0",
            }}
          />
     
      </div>
    </Layout>
  )
}

export default Paypal
