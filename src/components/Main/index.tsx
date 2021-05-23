import { SyntheticEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiCnpj } from "../../services/empresa";
import { IEmpresa } from "../../interface/empresa";

import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { Form, Card } from "react-bootstrap";

import search from "../../assets/search_image.png";
import "react-multi-carousel/lib/styles.css";
import styles from "./styles.module.scss";

interface Props {
  dadosEmpresa: (empresa: IEmpresa) => void;
}

export function Main({ dadosEmpresa }: Props) {
  const [cnpjEmpresa, setCnpjEmpresa] = useState<string>("");
  const [empresas, setEmpresas] = useState<IEmpresa[]>([]);
  const [validade, setValidade] = useState<boolean>(true);
  const [mensagem, setMensagem] = useState<string>("");

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setValidade(true);
    setMensagem("");

    const empresaExist = empresas.find(
      (empresa) => empresa.CNPJ.replace(/\D/gim, "") === cnpjEmpresa
    );

    if (!empresaExist) {
      await apiCnpj
        .get(cnpjEmpresa)
        .then((res: any) => {
          if (res.data.status === "ERROR") {
            setValidade(false);
            setMensagem("CNPJ Inválido ❌");
          } else {
            const updateEmpresa = [...empresas];
            const newEmpresa: IEmpresa = {
              razaoSocial: res.data.nome,
              CNPJ: res.data.cnpj,
              endereco:
                res.data.logradouro +
                " " +
                res.data.bairro +
                " " +
                res.data.municipio +
                "-" +
                res.data.uf,
            };

            setMensagem("Empresa encontrada ✅");
            setValidade(false);

            setTimeout(() => {
              setValidade(true);
            }, 1500);

            updateEmpresa.push(newEmpresa);
            localStorage.setItem(
              "@Store:empresa",
              JSON.stringify(updateEmpresa)
            );
            setEmpresas(updateEmpresa);
          }
        })
        .catch(() => {
          setMensagem(
            "Não foi possível localizar a empresa, tente novamente em alguns minutos  ⚠"
          );
          setValidade(false);
        });
    } else {
      setValidade(false);
      setMensagem("Empresa já cadastrada ⚠");
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1610 },
      items: 4,
      paritialVisibilityGutter: 60,
      centerMode: true,
    },
    desktop2: {
      breakpoint: { max: 1610, min: 1290 },
      items: 3,
      paritialVisibilityGutter: 50,
      centerMode: true,
    },
    tablet: {
      breakpoint: { max: 1290, min: 925 },
      items: 2,
      paritialVisibilityGutter: 50,
      centerMode: true,
    },
    mobile: {
      breakpoint: { max: 925, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
      centerMode: false,
    },
  };

  useEffect(() => {
    const storagedEmpresas = localStorage.getItem("@Store:empresa");
    if (storagedEmpresas) {
      const empresaStore = JSON.parse(storagedEmpresas);
      setEmpresas(empresaStore);
    }
  }, []);

  const handleClick = (empresa: IEmpresa) => {
    dadosEmpresa(empresa);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__title}>
          <FontAwesomeIcon icon={faBuilding} className={styles.header__icon} />
          <h1>Localizador de Empresas</h1>
        </div>
        <Form onSubmit={handleSubmit} className={styles.header__search}>
          <Form.Control
            size="lg"
            type="text"
            placeholder="12345678100090"
            value={cnpjEmpresa}
            onChange={(event) => setCnpjEmpresa(event.target.value)}
            required
            maxLength={14}
            minLength={14}
          />
          <button type="submit" className={styles.btn_localizar}>
            LOCALIZAR
          </button>
        </Form>
        <span hidden={validade}>{mensagem}</span>
      </div>
      {empresas.length > 0 ? (
        <Carousel ssr responsive={responsive} className={styles.carousel}>
          {empresas.map((empresa, index) => {
            return (
              <Card body key={index} className={styles.carousel__card}>
                <Link
                  to="/map"
                  key={index}
                  onClick={() => handleClick(empresa)}
                >
                  <h5>{empresa.razaoSocial}</h5>
                  <h6>Razão Social</h6>
                  <h5>{empresa.CNPJ}</h5>
                  <h6>CNPJ</h6>
                  <h5>{empresa.endereco}</h5>
                  <h6>Endereço</h6>
                </Link>
              </Card>
            );
          })}
        </Carousel>
      ) : (
        <div className={styles.img}>
          <img src={search} alt="Imagem" />
          <span>Localize acima a primeira empresa</span>
        </div>
      )}
    </>
  );
}
