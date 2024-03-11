import "./App.css";

function Header(){
  return (
    <header>Header new</header>
  )
}
function Content(){
  return (<main>Nội dung</main>)
}

function Footer(){
  return(<footer>Footer</footer>)
}

type ProductType={
  id: number;
  name: string;
  price: string;
  sale: boolean;
  description: string;
}

function ShowProduct(props: ProductType):JSX.Element{
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.price}</h3>
      <p>{(props.sale ? "Đang sale": "")}</p>
      <p>{props.description}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <ShowProduct id={1} name="Product 2" 
      price="400.000" sale={true} description="Mô tả"/>
    </>
  );
}

export default App;
