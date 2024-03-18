import { Link } from "react-router-dom";
import IProduct from "../../interfaces/IProduct";

type productType={
  listProduct: IProduct[],
  onDelete: (id: string) => void
}


function ProductList(prop: productType){
  // console.log(prop);
  
    return (
      <>
        <Link to={"/product/add"} >Thêm sản phẩm</Link>
        <ul>
          {prop.listProduct.map(product=>{
                  return (
                      <li key={product.id} >
                        {product.name} - {product.price}
                        <Link className="btn btn-warning mx-3" to={`/product/edit/${product.id}`}>Sửa</Link>
                        <button className="btn btn-danger" onClick={()=>{ prop.onDelete(product.id!) }} >Xóa</button>
                      </li>
                  )
          })}
        </ul>
      </>
      
    )
}

export default ProductList;