import IProduct from "../interfaces/IProduct";

type productType={
  listProduct: IProduct[],
  onDelete: (id: string) => void
}


function ProductList(prop: productType){
  // console.log(prop);
  
    return (
      <ul>
        {prop.listProduct.map(product=>{
                return (
                    <li key={product.id} >
                      {product.name} - {product.price}
                      <button onClick={()=>{ prop.onDelete(product.id) }} >Xóa</button>
                    </li>
                )
        })}
      </ul>
    )
}

export default ProductList;