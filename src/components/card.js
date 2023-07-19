import "./card.css";
import { useContext, useState } from "react";
import { cartContext } from "./context/cartContext";
import { Snackbar } from "@mui/material";

function Card({ title, description, price, images }) {
  let { dataForCart, setCartData } = useContext(cartContext);
  function cartHandler() {
    setIsOpen(true);
    setCartData([...dataForCart, { title: title, cost: price }]);
    console.log("changed cart data");
    console.log(dataForCart);
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="cardDiv">
      <img src={images[0]} className="prodImage"></img>
      <p>{title}</p>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={cartHandler}>Add to Cart</button>
      <Snackbar
        message="Added to CART"
        autoHideDuration={1000}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      ></Snackbar>
    </div>
  );
}
export default Card;
