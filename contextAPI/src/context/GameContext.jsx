import { useState } from "react";
import { createContext } from "react";
export  const GameContext=createContext();
export const GameProvider=({children})=>{
    // const [game, setGame] = useState({
    //     gameName: "BGMI",
    //     ratings: 5,
    // });
    const [value,setValue]=useState(0)
    return (
        <GameContext.Provider value={{value,setValue}}  >
            {children}

        </GameContext.Provider>
    )

}

