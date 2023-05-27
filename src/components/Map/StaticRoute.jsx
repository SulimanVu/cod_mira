import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";


import { createControlComponent } from "@react-leaflet/core";

const CreateRoutineMachineLayer = ({ position, request }) => {

  const one = (request.latLngFrom.lat);
  const two = (request.latLngFrom.lng);
  const three = (request.latLngTo.lat);
  const four = (request.latLngTo.lng);

  const route = L.Routing.control({
    position,
    // collabsible: true,
    waypoints: [
      L.latLng(`${one}`,`${two}`),
      L.latLng(`${three}`,`${four}`)
    ],
    autoRoute: true,
    addWaypoints: true,
    routeWhileDragging: false,
    draggableWaypoints: false,
    fitSelectedRoutes: false,
  });

  return route;
};
const StaticRoute = createControlComponent(CreateRoutineMachineLayer);

export default StaticRoute;
