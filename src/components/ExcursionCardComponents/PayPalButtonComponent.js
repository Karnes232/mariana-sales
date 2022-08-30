import React, { useEffect } from "react"
import {
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const PayPalButtonComponent = ({ price }) => {
  const currency = "USD";
  const style = {"layout":"vertical"};
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  useEffect(() => {
    dispatch({
        type: "resetOptions",
        value: {
            ...options,
            currency: currency,
        },
    });
}, [currency]);

  return (
    <div>
      {price && (
        <div>
          
            <PayPalButtons
              disabled={false}
              forceReRender={[price, currency, style]}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                return actions.order
                  .create({
                    purchase_units: [
                      {
                        amount: {
                          currency_code: currency,
                          value: price,
                        },
                      },
                    ],
                  })
                  .then(orderId => {
                    // Your code here after create the order
                    return orderId
                  })
              }}
              onApprove={function (data, actions) {
                return actions.order.capture().then(function () {
                  // Your code here after capture the order
                })
              }}
            />
         
        </div>

      )}
    </div>
  )
}

export default PayPalButtonComponent
