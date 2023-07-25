import "./card.css";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "./context/cartContext";
import { Snackbar } from "@mui/material";

function Card({ title, description, price, images }) {
  let { dataForCart, setCartData, localData, setLocalData } =
    useContext(cartContext);

  function cartHandler() {
    setIsOpen(true);
    if (dataForCart.some((e) => e.title === title) === false) {
      const someVar = [...dataForCart, { title: title, cost: price, qty: 1 }];
      setCartData(someVar || []);
      localStorage.setItem("cartData", JSON.stringify(someVar));
      setLocalData(localStorage.getItem("cartData"));
    }
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
