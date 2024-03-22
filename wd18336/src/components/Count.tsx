import { useReducer, useState } from "react";

function reducer(state:any,action:any){
    switch(action){
        case "ADD":
            return state + 1;
        case "DELETE":
            return state -1;
        case "RESET":
            return 0
        default: 
            return state;
    }
}

function Count(){
    // const [count,setCount] = useState(0);
    const [count,dispatch] = useReducer(reducer,0)

    return (
       <>
            <h2>{count}</h2>

            <button className="btn btn-success mx-2" 
                onClick={()=>{dispatch("ADD")}}>Tăng</button>
            <button className="btn btn-danger mx-2" 
                onClick={()=> {dispatch("DELETE")}}>Giảm</button>
            <button className="btn btn-warning mx-2 " 
                onClick={()=>{dispatch("RESET")}}>Reset</button>
       </>
    )
}
export default Count;