import React from "react";

import Card from "../Card";

import "./style.scss";

import Carousel, { consts } from "react-elastic-carousel";

function CarouselComponent({ cards }) {
  return (
    <Carousel
      enableSwipe={true}
      disableArrowsOnEnd={false}
      itemPosition={consts.CENTER}
    >
      {cards.map((card) => (
        <Card
          key={card.cnpj}
          companyName={card.companyName}
          cnpj={card.cnpj}
          address={card.address}
        />
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
