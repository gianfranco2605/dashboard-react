import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userprofile: false,
    notification: false, 
}

export const ContextProvider = ({ children }) => {

    const [ activeMenu, setActiveMenu] = useState(true);
    // CLICKS ON NAVBAR
    const [ isClicked, setIsClicked ] = useState(initialState);
    // CLOSE SIDEBAR IN MOBILE STATE
    const [ screenSize, setScreenSize ] = useState(undefined);
    
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked] : true})
    }

    return (
        <StateContext.Provider
        value={{ 
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
        }}
        >
            { children }            
        </StateContext.Provider>
    )
};

export const userStateContext = () => useContext(StateContext);