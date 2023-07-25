import { useContext, useEffect, useState } from "react";
import "./counter.css";
import { cartContext } from "./context/cartContext";
function Counter(props) {
  let { dataForCart, setCartData, localData, setLocalData } =
    useContext(cartContext);

  let initQty = dataForCart[props.val].qty;
  const [copy, setCopy] = useState(initQty);

  useEffect(() => {
    let temp = dataForCart[props.val].qty;
    setCopy(temp);
  });

  function addHandler() {
    let newData = dataForCart;
    let currQty = newData[props.val].qty;
    newData[props.val].qty = currQty + 1;
    setCartData(newData);
    console.log(dataForCart[props.val]);
    localStorage.setItem("cartData", JSON.stringify(newData));
    setCopy(currQty + 1);
  }

  function subHandler() {
    if (copy == 1) {
      let newData = dataForCart.filter((data) => {
        return data.title !== props.title;
      });
      setCartData(newData);
      localStorage.setItem("cartData", JSON.stringify(newData));
      console.log(newData);
      if (newData.length == 0) {
        return;
      } else {
        let temp = newData[props.val].qty;
        setCopy(temp);
      }
      return;
    }
    let newData = dataForCart;
    let currQty = newData[props.val].qty;
    newData[props.val].qty = currQty - 1;
    setCartData(newData);
    localStorage.setItem("cartData", JSON.stringify(newData));
    setCopy(currQty - 1);
  }

  return (
    <div className="countDiv">
      <h4 className="qty">quantity</h4>
      <button className="countBtn" onClick={subHandler}>
        -
      </button>
      <div className="varDiv">{copy}</div>
      <button className="countBtn" onClick={addHandler}>
        +
      </button>
    </div>
  );
}
export default Counter;
