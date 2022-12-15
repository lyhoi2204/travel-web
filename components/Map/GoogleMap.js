import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const GoogleMap = (props) => {
  return (
    <Map
      google={props.google}
      clas
      containerStyle={{ position: "unset", width: "100%", height: "100%" }}
      zoom={10}
      initialCenter={
        {
          lat: 21.027266,
          lng: 105.855453
        }
      }
    />
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD_KRyVg7392_KqWnZCU103oW-wxwLKLaE"
})(GoogleMap);