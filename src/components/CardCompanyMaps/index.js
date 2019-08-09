import React, { Component } from 'react';

import { Container, InformationView, Description, Title, IconView } from './styles';
import { FiArrowLeftCircle } from "react-icons/fi";
import { green } from '../../contants/color';
import { withRouter } from 'react-router-dom';

class CardCompanyMaps extends Component {

  goToCompany = () => {
    this.props.history.push('/')  
  }

  render() {
    const { company } = this.props;
    return (
      <Container>
        <IconView onClick={() => this.goToCompany()}>
          <FiArrowLeftCircle size={40} color={green} />
        </IconView>
        <InformationView>
          <Title>{company.name}</Title>
          <Description>Razão social</Description>
        </InformationView>
        <InformationView>
          <Title>{company.cnpj}</Title>
          <Description>CNPJ</Description>
        </InformationView>
        <InformationView>
          <Title>{company.address}</Title>
          <Description>Endereço</Description>
        </InformationView>
      </Container>
    );
  }
}

export default withRouter(CardCompanyMaps);