import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";
import StaticRoute from './StaticRoute';


const Staticmap = ({request}) => {

    useEffect(() => {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("../../public/530453.png"),
          iconUrl: require("../../public/530453.png"),
          shadowUrl: require("../../public/marker-shadow.png"),
        });
      }, []);
      
    
      
      const center = [53.5, 38.5];
    
      return (
        <>
          <MapContainer
            center={center}
            zoom={4.3}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", padding: 0, margin: ' 0 auto'}}
          >
            <TileLayer
              url="https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}"
              attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              subdomains="abcd"
              accessToken="P7mzJeFFOYSd4jQQn63WJv52ny6MDpml5GhbREvKAWHEz3h3b9eBOVjtZwnz2GpH"
            />
            <StaticRoute position={"topright"} request={request}/>
          </MapContainer>
        </>
      );
}


export default Staticmap;