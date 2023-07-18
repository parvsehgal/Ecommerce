import { NavLink } from "react-router-dom";
import "./nav.css";
function Nav() {
  return (
    <div className="navBar">
      <NavLink to={"/"} className="links">
        Products
      </NavLink>
      <NavLink to={"/about"} className="links">
        About
      </NavLink>
      <button className="cartBtn">CART</button>
    </div>
  );
}
export default Nav;
