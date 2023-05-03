import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
 
 const Map = () => {
  const position = [-0.5000, 37.3333];
  const position1 = [-0.573174, 37.205472];
  const position2 = [-0.573174, 37.255472];
  const position3 = [-0.573174, 37.9060];
  const position4 = [-0.573174, 37.195472];
  const position5 = [-0.1766, 37.275472];
  const position6 = [-0.1769, 37.155472];
  const position7 = [-0.1769, 37.9083];
  const position8 = [-0.1769, 5.1026];
  const zoomLevel = 17;

  const codingSpot = new Icon({
    iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBAnOSKgxSAyRVthDaWVysClWhEh2Hc6qDwA&usqp=CAU",
    iconSize: [30, 45],
    iconAnchor: [40, 90],
    popupAnchor: [-25, -40],
  });
 
  return (
    <MapContainer zoom={zoomLevel} center={position} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position} icon={codingSpot}>
        <Popup>
         info about driver
        </Popup>
      </Marker> 
      <Marker position={position1} icon={codingSpot}>
        <Popup>
        info about driver
        </Popup>
      </Marker>
      <Marker position={position2}icon={codingSpot}>
        <Popup>
        info about driver
        </Popup>
      </Marker>
      <Marker position={position3} icon={codingSpot}>
        <Popup>
        info about driver
        </Popup>
      </Marker>
      <Marker position={position4} icon={codingSpot}>
        <Popup>
        info about driver
        </Popup>
      </Marker>
      <Marker position={position5} icon={codingSpot}>
        <Popup>
        info about driver
        </Popup>
      </Marker>
      <Marker position={position6} icon={codingSpot}>
        <Popup>
        info about driver
        </Popup>
      </Marker>
      <Marker position={position7} icon={codingSpot}>
        <Popup>
        info about driver
        </Popup>
      </Marker>
      <Marker position={position8} icon={codingSpot}>
        <Popup>
        info about driver
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;