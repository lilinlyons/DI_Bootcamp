import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Product = (props) => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(()=>{
    info()
  },[])

  const info = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/products/${params.id}`
      );
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>Product</h2>
      {product.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <Link to='/'> continue shopping</Link>
          </div>
        );
      })}
    </>
  );
};
export default Product;
