import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const [products, setProducts] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    all();
  }, []);

  const all = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const add = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    };
    try {
      const res = await fetch("http://localhost:3001/api/products", options);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>My Shop</h2>
      <h2>Add Product</h2>
      <form onSubmit={add}>
        <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
        <input type='submit' value={"Add"} />
      </form>
      {products &&
        products.map((item) => {
          return (
            <div className='card' key={item.id}>
              <h2>{item.name}</h2>
              <h4>{item.price}</h4>
              <Link to={`/product/${item.id}`}>Buy Now</Link>
            </div>
          );
        })}
    </>
  );
};
export default Shop;
