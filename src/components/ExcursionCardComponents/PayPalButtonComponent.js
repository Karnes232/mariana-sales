import React from 'react'
import { PayPalButton } from "react-paypal-button-v2"

const PayPalButtonComponent = ({price}) => {

  return (
    <div>
    {price && (
      <PayPalButton
            amount={`${price.split(" ")[0]}`}
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
          )}
    
    </div>
  )
}

export default PayPalButtonComponent