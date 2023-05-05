import { Map , Marker} from "mapbox-gl";
import { useReducer } from "react";
import { MapContext } from "./MapContext";
import { MapReducer } from "./MapReducer";


export interface MapState{
    isMapReady: boolean;
    map?: Map,
}


const INITIAL_STATE: MapState= {
    isMapReady: false,
    map: undefined,
}

interface Props{
    children: JSX.Element | JSX.Element[];
}


export const MapProvider = ({children}: Props) =>{

    const [state, dispach] = useReducer(MapReducer, INITIAL_STATE);

    const setMap = (map: Map)=>{

        new Marker()
                .setLngLat(map.getCenter())
                .addTo(map);
        dispach({type: 'setMap',payload:map})
    }

    return (
        <MapContext.Provider value={{
            ...state,


            setMap,
        }}>
            {children}
        </MapContext.Provider>
     );
}
