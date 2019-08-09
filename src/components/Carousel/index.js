import React from 'react';

import ItemsCarousel from 'react-items-carousel';
import { Container } from './styles';
import CardCompany from '../CardCompany';

const Carousel = ({companies}) => {
  return (
    <Container>
      <ItemsCarousel
        gutter={50}
        activePosition={'center'}
        numberOfCards={4}
        slidesToScroll={1}
        outsideChevron={true}
        freeScrolling={true}
        showSlither={false}
        firstAndLastGutter={false}
        chevronWidth={50}
        // activeItemIndex={this.state.activeItemIndex}
        // requestToChangeActive={value => this.setState({ activeItemIndex: value })}
        rightChevron={'>'}
        leftChevron={'<'}
      >
        {companies.map(company =>
          <CardCompany company={company} key={company.id}/>
        )}
      </ItemsCarousel>
    </Container>
  );
}

export default Carousel;
