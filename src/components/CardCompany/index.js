import React, { Component } from 'react';

import { Container, Title, Description, InformationView } from './styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCompany } from '../../actions/company';

class CardCompany extends Component {

  goToCompany = async () => {
    const { history, company } = this.props;
    await this.props.setCompany(company);
    history.push('/company');  
  }

  render() {
    const { company } = this.props;
    return (
      <Container onClick={() => this.goToCompany()}>
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

export default withRouter(connect(undefined, { setCompany })(CardCompany))