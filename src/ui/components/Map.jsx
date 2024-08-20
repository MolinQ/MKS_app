import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import { useSelector } from "react-redux";
import selectors from "../../core/selectors.js";

function Map() {
    const MAP_API_KEY = 'AIzaSyBHi04mdnT_YxBzIlghCmFjAzGcTchdtDk';
    const latitude = Number(useSelector(selectors.latitude));
    const longitude = Number((selectors.longitude));

    const center = {
        lat: latitude || 0,
        lng: longitude || 0
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAP_API_KEY
    });

    return (
        <div className='w-50'>
            {isLoaded ? (
                <GoogleMap
                    center={center}
                    zoom={8}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                >
                    {<Marker position={{ lat: latitude || 0 , lng: longitude || 0 }} />}
                </GoogleMap>
            ) : (
                <>No connection with Google Maps</>
            )}
        </div>
    );
}

export default Map;