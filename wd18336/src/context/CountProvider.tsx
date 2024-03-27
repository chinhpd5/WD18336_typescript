import { ReactNode, createContext, useReducer } from "react";

type Prop={
    children: ReactNode
}

export const CountContext = createContext({} as {count:number,dispatch:any });

function reducer(state:any, action: any){
    switch(action){
        case "ADD":
            return state+1;
        case "DELETE":
            return state-1;
        case "RESET":
            return 0;
        default:
            return state;
    }
}

export function CountProvider(prop: Prop){

    const [count, dispatch] = useReducer(reducer,0)

    return (
        <CountContext.Provider value={{count,dispatch}}>
            {prop.children}
        </CountContext.Provider>
    )

}