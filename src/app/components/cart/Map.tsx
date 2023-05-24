"use client";

import { useMemo, useState } from "react";
import type { NextPage } from "next";
import { useLoadScript, GoogleMap, MarkerF, CircleF } from "@react-google-maps/api";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import styles from "./styles/cart.module.css";
import PlacesAutocomplete from "./Search";
import { AppLoader } from "../ui/Loader";

const CartMap: NextPage = () => {
  const [lat, setLat] = useState(27.672932021393862);
  const [lng, setLng] = useState(85.31184012689732);

  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <AppLoader />;
  }

  return (
    <div className={styles.homeWrapper}>
      <GoogleMap options={mapOptions} zoom={14} center={mapCenter} mapTypeId={google.maps.MapTypeId.ROADMAP} mapContainerStyle={{ width: "390px", height: "250px" }} onLoad={(map) => console.log("Map Loaded")}>
        <MarkerF position={mapCenter} onLoad={() => console.log("Marker Loaded")} />

        {/* {[1000, 2500].map((radius, idx) => {
          return (
            <CircleF
              key={idx}
              center={mapCenter}
              radius={radius}
              onLoad={() => console.log("Circle Load...")}
              options={{
                fillColor: radius > 1000 ? "red" : "green",
                strokeColor: radius > 1000 ? "red" : "green",
                strokeOpacity: 0.8,
              }}
            />
          );
        })} */}
      </GoogleMap>
    </div>
  );
};

export default CartMap;
