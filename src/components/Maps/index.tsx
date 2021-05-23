import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";
import { apiGecode } from "../../services/geocodingGoogle";
import { IEmpresa } from "../../interface/empresa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./styles.module.scss";

interface Props {
  empresa: IEmpresa;
}

export function Map({ empresa }: Props) {
  const [empresaMap] = useState<IEmpresa>(empresa);
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>(false);
  let history = useHistory();

  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZGllZ292YXoiLCJhIjoiY2tvdnVlazNiMDkwdzJucG16cWxvcnRzdiJ9.DDoSFvNfByhy3lqFkHtheA",
  });

  useEffect(() => {
    if (empresaMap?.CNPJ === "") {
      history.push("/");
    } else {
      (async function getEndereco() {
        setLoader(true);
        await apiGecode
          .get("/json", {
            params: {
              address: empresaMap.endereco + empresaMap.razaoSocial,
              key: "AIzaSyDdI14A2M5QynOpuYJm_qygWiqI4YlwwC4",
            },
          })
          .then((res) => {
            setLat(res.data.results[0].geometry.location.lat);
            setLng(res.data.results[0].geometry.location.lng);
          })
          .catch(() => {
            console.error("Erro ao buscar endereço.");
          })
          .finally(() => {
            setLoader(false);
          });
      })();
    }
  }, [empresaMap, history]);

  return (
    <>
      {loader ? (
        <div className={styles.spinner}>
          <div className={styles.spinner__icon} hidden={false}></div>
        </div>
      ) : (
        <Map
          // eslint-disable-next-line react/style-prop-object
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100vh",
            width: "100vw",
          }}
          center={[lng, lat]}
          zoom={[18]}
        >
          <div className={styles.container}>
            <Card body className={styles.conteiner__card}>
              <Link to="/">
                <FontAwesomeIcon
                  icon={faArrowCircleLeft}
                  className={styles.container__icon}
                />
              </Link>
              <h5>{empresa.razaoSocial}</h5>
              <h6>Razão Social</h6>
              <h5>{empresa.CNPJ}</h5>
              <h6>CNPJ</h6>
              <h5>{empresa.endereco}</h5>
              <h6>Endereço</h6>
            </Card>
          </div>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          ></Layer>
          <Marker coordinates={[lng, lat]}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.marker} />
          </Marker>
        </Map>
      )}
    </>
  );
}
