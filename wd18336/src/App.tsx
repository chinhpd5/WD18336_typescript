import { useEffect, useState } from "react";
import "./App.css";
import IProduct from "./interfaces/IProduct";
import ProductList from "./components/Product/ProductList";
import { Route , Routes, json } from "react-router-dom";
import ProductAdd from "./components/Product/ProductAdd";
import ProductEdit from "./components/Product/ProductEdit";


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
        setProduct(product.filter((item)=> item.id != id ));
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
      setProduct([...product,newData])
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
      setProduct(product.map((item)=>{
        if(item.id == id)
          return data;
        else
          return item;
      }))
    })
    .catch(()=>{
      console.log("lỗi khi sửa dữ liệu");
      
    })
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

      </Route>

      {/* <Route path="/product" element={<ProductList listProduct={product} onDelete={handleDelete}/>} />
      <Route path="product/add" element={<ProductAdd onAdd={handleAdd}/>} />
      <Route path="product/edit/:id" element={<ProductEdit onEdit={handleUpdate} />}/> */}
    </Routes>
  )
}

export default App;
