import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const GoogleMap = ({ staticPosition }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerRefs = useRef([]);
  const infoWindowRefs = useRef([]);
  const [addresses, setAddresses] = useState([]);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const loadGoogleMapsScript = () => {
    if (window.google) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyByDRFqRVuH0o7fodklEhr11JxEeUGD54Q&libraries=places";
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
  };

  useEffect(() => {
    loadGoogleMapsScript();
  }, []);

  useEffect(() => {
    if (scriptLoaded && window.google && staticPosition?.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();

      if (!mapInstance.current) {
        mapInstance.current = new window.google.maps.Map(mapRef.current, {
          zoom: 10,
          mapTypeId: "roadmap",
        });
      }

      staticPosition.forEach((position, index) => {
        const { latitude, longitude } = position;
        const markerPosition = { lat: latitude, lng: longitude };
        bounds.extend(markerPosition);

        if (!markerRefs.current[index]) {
          const marker = new window.google.maps.Marker({
            position: markerPosition,
            map: mapInstance.current,
            draggable: false,
            icon: {
              url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
              scaledSize: new window.google.maps.Size(50, 50),
            },
          });

          const infoWindow = new window.google.maps.InfoWindow({
            content: "<div style='width: 200px;'>Loading address...</div>",
          });

          marker.addListener("mouseover", () => {
            infoWindow.open(mapInstance.current, marker);
          });

          marker.addListener("mouseout", () => {
            infoWindow.close();
          });

          markerRefs.current[index] = marker;
          infoWindowRefs.current[index] = infoWindow;
        } else {
          markerRefs.current[index].setPosition(markerPosition);
        }
      });

      mapInstance.current.fitBounds(bounds);
    }
  }, [scriptLoaded, staticPosition]);

  useEffect(() => {
    if (infoWindowRefs.current.length > 0 && addresses.length > 0) {
      addresses.forEach((address, index) => {
        if (infoWindowRefs.current[index]) {
          infoWindowRefs.current[index].setContent(
            `<div style='width: 200px; font-size: 14px; font-family: Arial, sans-serif; display: flex; align-items: center;'>${address}</div>`
          );
        }
      });
    }
  }, [addresses]);

  const fetchAddresses = async () => {
    try {
      const fetchedAddresses = await Promise.all(
        staticPosition.map(async (position) => {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.latitude},${position.longitude}&key=AIzaSyByDRFqRVuH0o7fodklEhr11JxEeUGD54Q`
          );
          return (
            response.data.results[0]?.formatted_address || "Address not found"
          );
        })
      );
      setAddresses(fetchedAddresses);
    } catch (error) {
      console.error("Error fetching addresses: ", error);
    }
  };

  useEffect(() => {
    if (scriptLoaded) {
      fetchAddresses();
    }
  }, [scriptLoaded]);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
};

export default GoogleMap;
