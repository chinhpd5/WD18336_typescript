import ProductType from '../interfaces/product.ts';

function ShowProduct(props: ProductType):JSX.Element{
    // console.log(props);
    return (
      <div>
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <p>{(props.sale ? "Đang sale": "")}</p>
        <p>{props.description}</p>
      </div>
    )
}

export default ShowProduct;