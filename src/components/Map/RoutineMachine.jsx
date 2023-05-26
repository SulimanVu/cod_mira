import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { createControlComponent } from "@react-leaflet/core";
import { useMap } from "react-leaflet";
import { saveRoute } from "../../features/requestSlice";
import { useDispatch } from "react-redux";

const CreateRoutineMachineLayer = ({ position }) => {
  const dispatch = useDispatch()
  const map = useMap();
  const route = L.Routing.control({
    position,
    collabsible: true,
    waypoints: [null],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 2 }],
    },
    autoRoute: true,
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    geocoder: L.Control.Geocoder.nominatim(),
  });

  route.on("routesfound", function (e) {    
    dispatch(saveRoute({waypoint1: JSON.stringify(e.routes[0].waypoints[0]), waypoint2: JSON.stringify(e.routes[0].waypoints[1]), summary: e.routes[0].summary}))





    const marker = L.marker([
      e.waypoints[0].latLng.lat,
      e.waypoints[0].latLng.lng,
    ]).addTo(map);

    e.routes[0].coordinates.forEach(function (coord, index) {
      setTimeout(() => {
        marker.setLatLng([coord.lat, coord.lng]);
      }, 3 * index);
    });
  });

  return route;
};
const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

export default RoutingMachine;