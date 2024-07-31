import "./App.css";
import Shop from "./component/Shop";
import Product from "./component/Product";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
