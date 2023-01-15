import { useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext(); //자료를 담고있음
export function DarkModeProvider({children}){ //자료를 잘 가지고 있는 우산. 글로벌하게 기억하고 싶은걸 담으면 됌.
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = ()=>setDarkMode((mode)=>!mode);
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>)
} 