import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
const KEY =
  "pk_test_51KmGUaKDwdn1zi6XabE9OY0Lx9nwTGofjSBge47WqVolbHUuYPwDsdwJSDqxW6xQzj6H7ioBnm0UZ2Q90d3Px60r00WMsb2PZA";
function Pay() {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        console.log("try....");
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate("/success");
      } catch (error) {
        console.log("Frontend: ", error);
      }
    };
    stripeToken && makeRequest();
  }, [navigate, stripeToken]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="shop"
        image="https://cdn.dribbble.com/users/388052/screenshots/15969217/media/541d0e931dc044f08db966abeb598aec.jpg?compress=1&resize=700x525&vertical=top"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
}

export default Pay;
