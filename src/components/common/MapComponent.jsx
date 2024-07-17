import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ markers }) => {
  return (
    <div
      className="bg-cover bg-center w-full p-20 mt-10"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2023/02/02/18/22/beach-7763502_1280.jpg")',
      }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-10 w-full text-center">
        295+ Projects united{" "}
        <span className="text-[#209653]">to bring back a Trillion Trees.</span>{" "}
        <br /> Donate Now!
      </h1>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{
          height: "400px",
          width: "90%",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "20px",
          margin: "auto",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          tileSize={512}
          zoomOffset={-1}
          opacity={1}
          detectRetina={true}
          noWrap={true}
          maxZoom={18}
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.popupContent}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
