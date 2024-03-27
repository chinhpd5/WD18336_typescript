import { useContext, useEffect, useReducer, useState } from "react";
import IProduct from "../interfaces/IProduct";
import ProductList from "./Product/ProductList";
import { CountContext } from "../context/CountProvider";


function reducer2(state:any, action:any){
    console.log(action);
    switch(action.type){
        case "GAN":
            // state = action.payload;
            // break;
            return action.payload;
        default:
            state;
    }
    // return state;
}
const initProduct={
    listProduct: [] as IProduct[],
    isLoading: false
}

function reducerProduct(state:any, action: any){
    
    switch(action.type){
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "DONE":
            return {
                ...state,
                isLoading: false,
                listProduct: action.payload
            }
        default:
            return state;
    }
}

function Count(){
    const {count,dispatch} = useContext(CountContext)

    // const [count,setCount] = useState(0);

    // const [count,dispatch] = useReducer(reducer,0)
    const [count2,dispatch2] = useReducer(reducer2,0)
    const [product,dispatchProduct] = useReducer(reducerProduct,initProduct);
    //b1 tạo reducer
    //b2 tạo giá trị khởi tạo initProduct
    //b3 tạo function reducerProduct
    //b4 tạo nút get data và xử làm handleGetData
    //b5 xử lý logic {product.isLoading ? <h2>Loading ....</h2> : <ProductList listProduct={product.listProduct} onDelete={()=>{}} /> }

    function handleGetData(){
        
        // b1 tạo loading
        dispatchProduct({type: "LOADING"});

        // b2 gọi dữ liệu
        setTimeout(()=>{
                // product
            fetch(`http://localhost:3000/product`)
                .then(data=>{
                return data.json();
                })
                .then(data=>{
                    dispatchProduct({type: "DONE", payload: data});
                })
        },3000)
       
    }

    return (
        <>
            <div>
                <button onClick={handleGetData}>Get Data</button>
                {product.isLoading ? <h2>Loading ....</h2> : <ProductList listProduct={product.listProduct} onDelete={()=>{}} /> }
            </div>
            <div>
                <h2>{count}</h2>

                <button className="btn btn-success mx-2" 
                    onClick={()=>{dispatch("ADD")}}>Tăng</button>
                <button className="btn btn-danger mx-2" 
                    onClick={()=> {dispatch("DELETE")}}>Giảm</button>
                <button className="btn btn-warning mx-2 " 
                    onClick={()=>{dispatch("RESET")}}>Reset</button>
            </div>

            <div>
                <h2>{count2}</h2>
                <button className="btn btn-success mx-2" 
                    onClick={
                        ()=>{dispatch2({type: "GAN",payload: 10})}
                    }>
                        Gán gt
                </button>

            </div>
       </>
    )
}
export default Count;