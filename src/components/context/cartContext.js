import { Children, createContext, useState } from "react";

export const cartContext = createContext();

function Cart({ children }) {
  const [dataForCart, setCartData] = useState([]);
  return (
    <cartContext.Provider value={{ dataForCart, setCartData }}>
      {children}
    </cartContext.Provider>
  );
}

export default Cart;
