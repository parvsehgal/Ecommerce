import { createContext, useState } from "react";

export const cartContext = createContext();

function Cart({ children }) {
  const [localData, setLocalData] = useState(localStorage.getItem("cartData"));
  const [dataForCart, setCartData] = useState([]);
  return (
    <cartContext.Provider
      value={{ dataForCart, setCartData, localData, setLocalData }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default Cart;
