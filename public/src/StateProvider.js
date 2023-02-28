import React,{createContext,useContext,useReducer} from "react";

    export const StateProvider = createContext();

    export const DataLayer=({initialState,reducer,children})=>(
        <StateProvider.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateProvider.Provider>
    );

    export const useDataLayerValue=()=>useContext(StateProvider);