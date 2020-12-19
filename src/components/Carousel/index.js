import React from "react";
import Carousel, { consts } from "react-elastic-carousel";

import Card from "../Card";

import "./style.scss";

function CarouselComponent({ cards }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: cards.length },
    {
      width: 550,
      itemsToShow: 2,
      itemsToScroll: cards.length,
    },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <Carousel
      breakPoints={breakPoints}
      enableSwipe={true}
      disableArrowsOnEnd={false}
      itemPosition={consts.CENTER}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          companyName={card.companyName}
          cnpj={card.cnpj}
          address={card.address}
        />
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
