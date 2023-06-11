import "../App.css";
import React, { useState } from "react";
import UmbAcad from "../assets/umbrellaacademy.png";
import "bootstrap/dist/css/bootstrap.css";
// import Checkout from "../components/Checkout.js";
import Shipping from "./Shipping";

function Home() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className="App mt-5">
      {checkout ? (
        <Shipping />
      ) : (
        <>
          <h1 className="App_H1">Product</h1>
          <img
            src={UmbAcad}
            alt="HQ umbrella Academy"
            height="auto"
            width="300"
            className="imgCss"
          />
          <h2 className="margin">
            <strong>HQ Umbrella Academy</strong>
          </h2>
          <h5 className="description margin">
            <u>Description:</u> Times are tough for the dysfunctional superhero
            family known as the Umbrella Academy. In the wake of the
            near-apocalypse created by one of their peers, and after the death
            of their beloved mentor, Pogo, the group finds itself quite
            hopeless.
          </h5>
          <h4 className="margin">
            <u>Item Number:</u> 001
          </h4>
          <h3 className="margin">
            <u>Price:</u> $100.00
          </h3>
          <button
            className="btnCss margin marginBtn"
            onClick={() => {
              setCheckOut(true);
            }}
          >
            Buy it now!
          </button>
        </>
      )}
    </div>
  );
}

export default Home;
