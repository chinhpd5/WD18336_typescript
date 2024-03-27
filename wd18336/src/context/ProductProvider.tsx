import { ReactNode, createContext, useEffect, useReducer } from "react";
import IProduct from "../interfaces/IProduct";

type Prop={
    children: ReactNode
}

export const SET_PRODUCT = "set_product";
export const ADD_PRODUCT ="add_product";
export const UPDATE_PRODUCT ="update_product";
export const DELETE_PRODUCT = "delete_product";


function reducerProduct(state:any, action:any){
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


export const ProductContext = createContext({} as {product: any,dispatchProduct:any});


export function ProductProvider(prop: Prop){
    const [product,dispatchProduct] = useReducer(reducerProduct,[] as IProduct[])

    useEffect(()=>{
        fetch(`http://localhost:3000/product`)
          .then(data=>{
            return data.json();
          })
          .then(data=>{
            dispatchProduct({type: SET_PRODUCT, payload: data})
          })
    
      },[])


    return(
        <ProductContext.Provider value={{product,dispatchProduct}}>
            {prop.children}
        </ProductContext.Provider>
    )
}