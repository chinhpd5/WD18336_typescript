import { Link } from "react-router-dom";
import IProduct from "../../interfaces/IProduct";
import { useContext, useEffect } from "react";
import { DELETE_PRODUCT, ProductContext, SET_PRODUCT } from "../../context/ProductProvider";

type productType={
  
}


function ProductList(prop: productType){
  // console.log(prop);
    const {product,dispatchProduct} = useContext(ProductContext);

    useEffect(()=>{
      fetch(`http://localhost:3000/product`)
        .then(data=>{
          return data.json();
        })
        .then(data=>{
          dispatchProduct({type: SET_PRODUCT, payload: data})
        })
  
    },[])

    function handleDelete(id: string){
      fetch(`http://localhost:3000/product/${id}`,{
        method:"DELETE",
        headers:{
          'Content-Type':'application/json'
        }
      })
      .then(()=>{
          dispatchProduct({type: DELETE_PRODUCT,payload: id})
      })
      .catch(()=>{
        console.log("có lỗi khi xóa");
        
      })
    }

    return (
      <>
        <Link to={"/product/add"} >Thêm sản phẩm</Link>
        <ul>
          {product.map((item:IProduct)=>{
                  return (
                      <li key={item.id} >
                        {item.name} - {item.price}
                        <Link className="btn btn-warning mx-3" to={`/product/edit/${item.id}`}>Sửa</Link>
                        <button className="btn btn-danger" 
                          onClick={()=>{ handleDelete(item.id!) }} >Xóa</button>
                      </li>
                  )
          })}
        </ul>
      </>
      
    )
}

export default ProductList;