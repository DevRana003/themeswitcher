import React from "react";
import { createContext , useContext } from "react";

export const themeContext = createContext({
    thememode:"light",
    darktheme : ()=>{},
    lighttheme : ()=>{}

})

export const ThemeProvider = themeContext.Provider

export default function useTheme()
{
    return useContext(themeContext)
}

 
