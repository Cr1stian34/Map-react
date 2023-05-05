//import React from "react";
import { MapProvider, PlacesProvider } from "./context";
import { HomeScreen } from "./screens/HomeScreen";

export const Mipantallapp = () => {
    return(
        <PlacesProvider>
            <MapProvider>
                  <HomeScreen/>
            </MapProvider>
          
        </PlacesProvider>
    )
}