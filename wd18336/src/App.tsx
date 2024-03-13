import "./App.css";
import ShowProduct from "./components/ShowProduct";
import ProductType from "./interfaces/product";

function App() {

  const arrProduct: ProductType[]=[
    {
      id: 1,
      name: "produc 1",
      price: "100.000",
      sale: true,
      description: "mô tả 1",
    },
    {
      id: 2,
      name: "produc 2",
      price: "200.000",
      sale: true,
      description: "mô tả 2",
    },
    {
      id: 3,
      name: "produc 3",
      price: "300.000",
      sale: true,
      description: "mô tả 3",
    },
    {
      id: 4,
      name: "produc 4",
      price: "400.000",
      sale: true,
      description: "mô tả 4",
    }
  ]
  //BTVN render arrProdcut 

  return (
    <>
      {
        arrProduct.map(product=>{
          return (<ShowProduct key={product.id} id={product.id} name={product.name} price={product.price} 
          sale={product.sale} description={product.description}/>)
        })
      }

    </>
  );
}

export default App;
