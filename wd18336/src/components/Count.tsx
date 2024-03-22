import { useEffect, useReducer, useState } from "react";
import IProduct from "../interfaces/IProduct";
import ProductList from "./Product/ProductList";

function reducer(state:any,action:any){
    console.log("action: ",action);
    console.log("state trước: ",state);
    
    switch(action){
        case "ADD":
            state = state + 1
            break;
            //return state + 1
        case "DELETE":
            state = state -1;
            break;
            //return state - 1
        case "RESET":
            state = 0
            break;
            //return 0
        default: 
            return state;
    }
    console.log("state sau:",state);
    return state;
}
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
    // const [count,setCount] = useState(0);
    const [count,dispatch] = useReducer(reducer,0)
    const [count2,dispatch2] = useReducer(reducer2,0)
    const [product,dispatchProduct] = useReducer(reducerProduct,initProduct);

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