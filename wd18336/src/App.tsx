import { useEffect, useReducer, useState } from "react";
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

const SET_PRODUCT = "set_product";
const ADD_PRODUCT ="add_product";
const UPDATE_PRODUCT ="update_product";
const DELETE_PRODUCT = "delete_product";

function reducerProduct(state: any, action: any){
  console.log(state);
  
  switch(action.type){
    case SET_PRODUCT:
      return action.payload;
    case ADD_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      return state.filter((item: IProduct)=>{ return item.id != action.payload });
    case UPDATE_PRODUCT:
      return state.map((item: IProduct)=> {
        if(item.id == action.payload.id)
          return action.payload;
        else{
          return item;
        }
      })
    default: 
      return state;
  }
}

function App() {
  // const [product,setProduct] = useState<IProduct[]>([])
  const [userList,setUserList]= useState<IUser[]>([])

  const [product,dispatchProduct] = useReducer(reducerProduct,[] as IProduct[])

  useEffect(()=>{
    // product
    fetch(`http://localhost:3000/product`)
      .then(data=>{
        return data.json();
      })
      .then(data=>{
        // console.log(data);
        // setProduct(data)
        dispatchProduct({type: SET_PRODUCT, payload: data})
      })
    // user
    fetch(`http://localhost:3000/users`)
      .then(res=>res.json())
      .then(res => setUserList(res))
      .catch(()=>{
        console.log("lấy danh sách user lỗi");
      })

  },[])

  function handleDelete(id: string){
    //call api xóa trong json server
    // console.log("nhận: ", id);
    fetch(`http://localhost:3000/product/${id}`,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(()=>{
        //xóa sản phẩm có id trong mảng product
        //sử dụng setProduct để gán lại giá trị mới cho product và render lại giao diện
        // setProduct(product.filter((item)=> item.id != id ));
        dispatchProduct({type: DELETE_PRODUCT,payload: id})
    })
    .catch(()=>{
      console.log("có lỗi khi xóa");
      
    })
    
  }

  //call API thêm mới sản phẩm
  function handleAdd(data: IProduct){
    // data là dữ liệu nhận được khi form submit gửi từ ProductAdd
    fetch(`http://localhost:3000/product/`,{
      method: 'POST', 
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>{
      // res là dữ liệu sản phẩm nhận lại sau khi thêm thành công (có id của sản phẩm)
      return res.json();
    })
    .then((newData)=>{
      // thêm product mới vào cuối mảng
      // setProduct([...product,newData])
      dispatchProduct({type: ADD_PRODUCT,payload: newData})
    })
    .catch(()=>{
      console.log("có lỗi");
      
    })
    
  }

  function handleUpdate(id: string, data: IProduct){
    // console.log({id, data});
    fetch(`http://localhost:3000/product/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type" : "Application/json"
      },
      body: JSON.stringify(data)
    })
    .then(data=>{
      return data.json();
    })
    .then(data=>{
      // setProduct(product.map((item)=>{
      //   if(item.id == id)
      //     return data;
      //   else
      //     return item;
      // }))
      dispatchProduct({type: UPDATE_PRODUCT, payload: data})
    })
    .catch(()=>{
      console.log("lỗi khi sửa dữ liệu");
      
    })
  }

  //User

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
          <Route path="" element={<ProductList listProduct={product} onDelete={handleDelete}/>} />
          {/* url: product/add */}
          <Route path="add" element={<ProductAdd onAdd={handleAdd}/>} />
          {/* url: product/edit/:id */}
          <Route path="edit/:id" element={<ProductEdit onEdit={handleUpdate} />} />
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
