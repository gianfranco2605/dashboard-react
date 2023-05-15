import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialSate = {
    chat: false,
    cart: false,
    userprofile: false,
    notification: false, 
}

export const ContextProvider = ({ children }) => {

    const [ activeMenu, setActiveMenu] = useState(true);

    return (
        <StateContext.Provider
        value={{ 
            activeMenu,
            setActiveMenu,
        }}
        >
            { children }
            
        </StateContext.Provider>
    )
};


export const userStateContext = () => useContext(StateContext);