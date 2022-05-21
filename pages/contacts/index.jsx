import React from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {BsFillPersonFill, BsTelegram} from "react-icons/bs";
import {MdPlace, MdEmail} from "react-icons/md"

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const media = [
  {
    "id": "1",
    "title": "Phone number",
    "value": <a href="tel:+380678805105">+380678805105</a>,
    "icon": <BsFillPersonFill className="text-4xl" />
  },
  {
    "id": "2",
    "title": "Telegram",
    "value": <a href="https://t.me/Vlad_petruk">Vladyslav Petruk</a>,
    "icon": <BsTelegram className="text-4xl" />
  },
  {
    "id": "3",
    "title": "Email",
    "value": <a href="mailto:vladiislav.petruk@gmail.com">vladiislav.petruk@gmail.com</a>,
    "icon": <MdEmail className="text-4xl" />
  },
  {
    "id": "4",
    "title": "Address",
    "value": "Kyiv, Ukraine",
    "icon": <MdPlace className="text-4xl" />
  },
]

const Contacts = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD_78qhKYVvK0L9UZc5mp5F8LeW3yhQl1k",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <section>
      <Container>
        <Title text="Contact me" smallText="Get in touch" />
        <div className="grid items-center grid-cols-none md:grid-cols-2 gap-14">
          <div>
            <p className="mb-5 text-xl">
              If you want to talk about the project or have any questions, fill
              out the form below and I will answer within 1-2 days
            </p>
            <ul>
              {media.map(({id, title, value, icon}) => (
                <li key={id} className="flex items-center py-3 gap-7">
                  {icon}
                  <div className="flex flex-col items-start">
                    <span className="text-xl font-semibold uppercase">{title}</span>
                    <span className="text-lg font-medium">{value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        </div>
      </Container>
    </section>
  ) : (
    <></>
  );
};

export default React.memo(Contacts);
