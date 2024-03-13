import IProduct from "../interfaces/IProduct";

type productType={
    listProduct: IProduct[]
}


function ProductList(prop: productType){
    return (
      <ul>
        {prop.listProduct.map(product=>{
                return (
                    <li>{product.name} - {product.price}</li>
                )
        })}
      </ul>
    )
}

export default ProductList;