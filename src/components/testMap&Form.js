import React from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";
import { FaDirections } from "react-icons/fa";
function TestMap() {
  const [lng, setLng] = useState(54.37585762735543);
  const [lat, setLat] = useState(24.45677614934833);

  return (
    <div className="App">
    {console.log(process.env.REACT_APP_MAP_KEY)}
     
      <Map
        mapboxAccessToken="pk.eyJ1IjoidGhlbGV3aXNuZGVnd2EiLCJhIjoiY2xoN2h5a2g4MGdnODNwdXlxZGN6M3ZleSJ9.oC_9p-FHTomth1pFiw-trQ"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "15px",
          border: "2px solid red",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
         


      </Map>
    </div>
  );
}

export default TestMap;
