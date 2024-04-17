import GoogleMapReact from "google-map-react";
import { googleAPIKey } from "../../googleAPIKey";
import { ImLocation2 } from "react-icons/im";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const markerPosition = {
    lat: 40.7128,
    lng: -74.006,
  };
  const defaultProps = {
    center: {
      lat: 40.7128,
      lng: -74.006,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleAPIKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent position={markerPosition} text={<ImLocation2 />} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
