import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./navbar";
import Prod from "./product";
function RouterComp() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Prod />}></Route>
        <Route path="/about" element={<h1>ABOUT PAGE</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default RouterComp;
