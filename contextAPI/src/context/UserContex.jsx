import { createContext } from "react";

export const ContextName=createContext();

export const ProviderName =({children})=>{
    const name="Binod"
    const age=4
    console.log(children);
    
    return <ContextName.Provider value={{name,age}}>
        {children}
    </ContextName.Provider>

}