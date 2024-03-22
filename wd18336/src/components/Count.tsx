import { useReducer, useState } from "react";

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

function Count(){
    // const [count,setCount] = useState(0);
    const [count,dispatch] = useReducer(reducer,0)
    const [count2,dispatch2] = useReducer(reducer2,0)

    return (
       <>
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