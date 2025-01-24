import React from "react";
import { Textarea } from "flowbite-react";
import Button from "./Button";
import GoogleMap from "./GoogleMap";
import Footer from "./Footer";
import ContactHeader from "./ContactHeader";
import SubNav from "./SubNav";

const Contact = () => {
  // const [currentPosition, setCurrentPosition] = React.useState(null);
  const staticPosition = [
    {
      latitude: 43.3022836126174,
      longitude: -2.996460143392414,
    },
    {
      latitude: 43.31675970819496,
      longitude: -2.675827506895655,
    },
  ];

  // React.useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setCurrentPosition({
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         });
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  // }, []);

  // const handlePositionChange = async (newPosition) => {
  //   setCurrentPosition(newPosition);
  //   const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${newPosition.latitude},${newPosition.longitude}&key=AIzaSyByDRFqRVuH0o7fodklEhr11JxEeUGD54Q`;
  //   try {
  //     const response = await fetch(geocodeUrl);
  //     const data = await response.json();
  //     if (data.results.length > 0) {
  //       const address = data.results[0].formatted_address;
  //       handleInputChange({
  //         target: {
  //           name: "location[address]",
  //           value: address,
  //         },
  //       });
  //       handleInputChange();
  //     } else {
  //       console.error("No address found for the given coordinates");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching address:", error);
  //   }
  // };

  return (
    <>
      <SubNav />
      <ContactHeader />
      <div className="py-4 w-[65%] mx-auto">
        <h1 className="text-[#474747] text-2xl font-bold text-center py-4">
          Contact Info
        </h1>

        <div className="py-4 flex gap-5">
          <div className="rounded py-3 px-10 w-2/3 bg-[#f5f5f5]">
            <h1 className="text-xl font-semibold text-[#474747] pt-5">
              Contact Info
            </h1>
            <div className="mt-10 space-y-4">
              <div className="flex justify-between items-center">
                <h1 className="text-md font-semibold text-[#212121]">
                  Phone No:
                </h1>
                <p className="text-sm font-medium text-[#474747]">944370259</p>
              </div>
              <div className="flex justify-between items-center gap-14">
                <h1 className="text-md font-semibold text-[#212121]">Email:</h1>
                <p className="text-sm font-medium text-[#474747]">
                  serigrafiasestao@serigrafiasestao.com
                </p>
              </div>
              <div className="flex justify-between items-start">
                <h1 className="text-md font-semibold text-[#212121]">
                  Address:
                </h1>
                <p className="text-sm font-medium text-[#474747]">
                  main Serigrafia Sestao
                </p>
              </div>
            </div>
          </div>
          <div className="w-full py-8 bg-[#f5f5f5] rounded">
            <h1 className="text-[#474747] px-6 font-bold text-2xl">
              Get in Touch
            </h1>
            <div className="mt-8 px-8 space-y-5">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-[#474747] text-md font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="outline-none py-2 pr-20 pl-4 mt-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-[#474747] text-md font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="outline-none py-2 pr-20 pl-4 mt-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-[#474747] text-md font-semibold"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  style={{ resize: "none" }}
                  className="outline-none py-2 pr-20 pl-4 mt-2 rounded"
                />
              </div>
            </div>
            <div className="px-8 mt-6">
              <div className="flex justify-end -mt-4" onClick={()=>alert("Message Sent")}>
                <Button >
                  <h1 className="relative">Send Message</h1>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4">
          <GoogleMap
            // currentPosition={currentPosition}
            // onPositionChange={handlePositionChange}
            staticPosition={staticPosition}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
