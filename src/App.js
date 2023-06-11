import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ThankYou from "./components/ThankYou";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Shipping from "./components/Shipping";

function App() {
  return (
    <div className="App">
      <Router>
        <PayPalScriptProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/checkout" element={<Shipping />} />
          </Routes>
        </PayPalScriptProvider>
      </Router>
    </div>
  );
}

export default App;
