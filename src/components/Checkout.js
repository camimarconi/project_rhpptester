import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import ThankYou from "./ThankYou";

function Checkout(props) {
  const [userID, setUserID] = useState(false);

  return (
    <div>
      {userID ? (
        <ThankYou userID={userID} />
      ) : (
        <>
          <div className="App mt-5 container">
            <div>
              <h4 className="App_H1 mb-5">Checkout & Payment</h4>
            </div>
            <div className="ppCssBtn">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "CLIENT_ID=AfT8NHETB39k-q9iFS7HNAEG_M4ydnz1znCYAX1MxvbUUSiB77DfaZAMzhmReoZQDgKEITMR6h9U0eHv",
                }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          description: "Umbrella Academy HQ",
                          currency_code: "USD",
                          amount: {
                            value: "100.00",
                          },
                          shipping: {
                            type: "SHIPPING",
                            address: {
                              address_line_1: props.myDataUser.address,
                              admin_area_2: props.myDataUser.city,
                              postal_code: props.myDataUser.zip,
                              country_code: "US",
                            },
                          },
                        },
                      ],
                      // payer: {
                      //   email_address: "tester@gmail.com",
                      //   name: {
                      //     given_name: "teste name",
                      //     surname: "test surname",
                      //   },
                      //   address: {
                      //     address_line_1: "adress 1",
                      //     postal_code: "0000000",
                      //     country_code: "US",
                      //   },
                      // },
                      application_context: {
                        shipping_preference: "SET_PROVIDED_ADDRESS",
                      },
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      const transactionID =
                        details.purchase_units[0].payments.captures[0].id;
                      setUserID(transactionID);

                      // alert(
                      //   `Transaction completed! Your Transaction ID is ${transactionID}`
                      // );
                      // window.location.href = "thankyou";
                    });
                  }}
                  style={{ layout: "horizontal" }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
