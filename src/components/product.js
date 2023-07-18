import "./products.css";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./card";

function Prod() {
  const [dataFromApi, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [val, setval] = useState("");
  const [isNotFound, setNotFound] = useState(false);
  async function getData() {
    setLoading(true);
    let { data } = await axios.get("https://dummyjson.com/products/");
    setData(data.products);
    console.log(dataFromApi);
    setLoading(false);
  }
  let compToRender = dataFromApi.map((data) => {
    return <Card {...data}></Card>;
  });
  useEffect(() => {
    if (val == "") {
      getData();
      setNotFound(false);
    }
  }, [val]);
  useEffect(() => {
    getData();
  }, []);
  function changeHandler(event) {
    setval(event.target.value);
    console.log(val);
  }

  function searchHandler(valToSearch) {
    setLoading(true);
    let newArray = dataFromApi.filter((data) => {
      return data.title.toLowerCase().includes(valToSearch.toLowerCase());
    });
    if (newArray.length == 0) {
      setNotFound(true);
    }
    setData(newArray);
    setLoading(false);
    console.log(isNotFound);
  }

  return (
    <div>
      <h2 className="head">here are the products</h2>
      <input type="text" value={val} onChange={changeHandler}></input>
      <button onClick={() => searchHandler(val)}>Search</button>
      <br></br>
      <br></br>
      {isLoading ? (
        <ClipLoader className="spinner" />
      ) : (
        <div className="cardsContainer">{compToRender}</div>
      )}
      {isNotFound ? <h1>NOT FOUND</h1> : <></>}
    </div>
  );
}
export default Prod;
