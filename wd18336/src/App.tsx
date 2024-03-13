import { useEffect, useState } from "react";
import "./App.css";
import IProduct from "./interfaces/IProduct";
import ProductList from "./components/ProductList";


function App() {
  const [product,setProduct] = useState<IProduct[]>([])

  useEffect(()=>{
    fetch(`http://localhost:3000/product`)
      .then(data=>{
        return data.json();
      })
      .then(data=>{
        // console.log(data);
        setProduct(data)
      })
  },[])

  return (
    <div>
      <ProductList listProduct={product} />
    </div>
  )
}

export default App;
