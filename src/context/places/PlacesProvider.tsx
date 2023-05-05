//import React from "react";

import { useEffect, useReducer } from "react";
import { getUserLocation } from "../../helpers";
import { PlacesContext } from "./PlacesContext";
import { PlacesReducer } from "./PlacesReducer";

export interface PlacesState{
    isLoading: boolean;
    userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState= {
    isLoading: true,
    userLocation: undefined
}

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({children} : Props) =>{

    const [state,dispach] = useReducer(PlacesReducer,INITIAL_STATE);


    useEffect(()=>{
        getUserLocation().then(lnglat=>dispach({type:'setUserLocation', payload: lnglat}))
    }, [])

    return(
        <PlacesContext.Provider value={{
            ...state,
           /* isLoading: true,
            userLocation: undefined*/
        }}>{children}</PlacesContext.Provider>
    )
}
