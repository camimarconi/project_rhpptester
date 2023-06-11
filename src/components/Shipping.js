import "../App.css";
import React, { useState } from "react";
import Checkout from "./Checkout";

function Shipping(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [mydataUser, setMyDataUser] = useState("");
  const [payment, setPayment] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const dataUser = {
      name: name,
      surname: surname,
      address: address,
      city: city,
      state: state,
      zip: zip,
    };
    setMyDataUser(dataUser);
    setPayment(true);
    console.log(dataUser);
  }

  return (
    <div>
      {payment ? (
        <Checkout myDataUser={mydataUser} />
      ) : (
        <>
          <div className="App mt-5 container">
            <div>
              <h4 className="App_H1 mb-5">Shipping Information</h4>
            </div>

            <div className="App mb-5">
              <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-4">
                  <label for="validationCustom01" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label for="validationCustom02" className="form-label">
                    Surname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 col-md-4">
                  <label for="exampleFormControlInput1" className="form-label">
                    Shipping Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Number + Street"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label for="validationCustom03" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom03"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-md-4">
                  <label for="validationCustom04" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom04"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div className="col-md-4">
                  <label for="validationCustom05" className="form-label">
                    US Zip Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom05"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>

                <div className="col-12">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit Shipping Information
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Shipping;
