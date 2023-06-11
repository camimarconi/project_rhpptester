import ty from "../assets/thankyou.png";

function ThankYou(props) {
  return (
    <div>
      <img src={ty} alt="thank you img" className="imgtnx" />
      <h1 className="thxCss">
        Your payment is completed. Thank you for your purchase! Your transaction
        ID is {props.userID}
      </h1>
    </div>
  );
}

export default ThankYou;
