import React, { createContext, useContext, useReducer } from 'react'
import './StateProvider.css'

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    return (

        <StateContext.Provider value={useReducer(reducer, initialState)}>

            {children}

        </StateContext.Provider>
    )
}
export const StateValue = () => useContext(StateContext)
