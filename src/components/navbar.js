import { NavLink, Link } from "react-router-dom";
import "./nav.css";
import { Drawer, Box } from "@mui/material";
import { useContext, useState } from "react";
import { cartContext } from "./context/cartContext";
function Nav() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  let { dataForCart, setCartData } = useContext(cartContext);

  function removeHandler(i) {
    let newCartData = dataForCart.filter((_, index) => {
      return index !== i;
    });
    setCartData(newCartData);
    console.log(i);
  }

  let toRender = dataForCart.map((data, index) => {
    return (
      <div className="cartDiv" {...data} key={index}>
        <h3>{data.title}</h3>
        <h4 className="dollars">${data.cost}</h4>
        <button className="remover" onClick={() => removeHandler(index)}>
          Remove
        </button>
      </div>
    );
  });

  return (
    <div className="navBar">
      <NavLink to={"/"} className="links">
        Products
      </NavLink>
      <NavLink to={"/about"} className="links">
        About
      </NavLink>
      <Link className="cartBtn" onClick={() => setDrawerOpen(true)}>
        CART
      </Link>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box width="400px" textAlign="center">
          <h2>CART</h2>
          {toRender}
        </Box>
      </Drawer>
    </div>
  );
}

export default Nav;
