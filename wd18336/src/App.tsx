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

function App() {
  return (
    <>
      <Header/>
      <Content></Content>
      <Footer/>
      
    </>
  );
}

export default App;
