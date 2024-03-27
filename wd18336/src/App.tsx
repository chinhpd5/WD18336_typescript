import { useContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import IProduct from "./interfaces/IProduct";
import ProductList from "./components/Product/ProductList";
import { Route , Routes, useSearchParams } from "react-router-dom";
import ProductAdd from "./components/Product/ProductAdd";
import ProductEdit from "./components/Product/ProductEdit";
import UserList from "./components/User/UserList";
import IUser from "./interfaces/IUser";
import UserAdd from "./components/User/UserAdd";
import Count from "./components/Count";

function App() {
  const [userList,setUserList]= useState<IUser[]>([])

  useEffect(()=>{
   
    // user
    fetch(`http://localhost:3000/users`)
      .then(res=>res.json())
      .then(res => setUserList(res))
      .catch(()=>{
        console.log("lấy danh sách user lỗi");
      })

  },[])

  function handleDeleteUser(id: string){
    
  }

  function handleAddUser(data: IUser){
      if(data){
        fetch('http://localhost:3000/users',{
          method: "POST",
          headers: {
            "Content-Type": "Application/json"
          },
          body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(res=> setUserList([...userList,res]))
        .catch(()=>{
          console.log("thêm bị lỗi");
          
        })
        
      }

  }

  //npm i react-router-dom
  return (
    <Routes>
      <Route path="/" element={ <h1>Trang chủ</h1> }/>
      
      <Route path="product">
          {/* url: product */}
          <Route path="" element={<ProductList/>} />
          {/* url: product/add */}
          <Route path="add" element={<ProductAdd/>} />
          {/* url: product/edit/:id */}
          <Route path="edit/:id" element={<ProductEdit />} />
      </Route>

      <Route path="user" >
        <Route path="" element={<UserList data={userList} onDelete={handleDeleteUser} />} />
        <Route path="add" element={<UserAdd onAdd={handleAddUser}/>} />
      </Route>
      <Route path="count" element={<Count/>} />

      {/* <Route path="/product" element={<ProductList listProduct={product} onDelete={handleDelete}/>} />
      <Route path="product/add" element={<ProductAdd onAdd={handleAdd}/>} />
      <Route path="product/edit/:id" element={<ProductEdit onEdit={handleUpdate} />}/> */}
    </Routes>
  )
}

export default App;
