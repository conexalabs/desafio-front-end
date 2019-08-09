import React, { Component } from 'react';
import { Container, Title, TitleView, InputView, IconDiv, Input, Button, ButtonText } from './styles';
import { FaBuilding } from 'react-icons/fa';
import { green } from '../../contants/color';
import { cnpjMask, unformatMask, validaCnpj, showAlert, isMobile } from '../../services/helpers';
import { connect } from 'react-redux';
import { searchCompany } from '../../actions/company';
import windowSize from 'react-window-size';

class Header extends Component {

  state = {
    cnpj: ''
  }

  handleChange(event) {
    this.setState({cnpj: cnpjMask(event.target.value)});
  }

  onSubmit = async () => {
    const { cnpj } = this.state;
    if (!validaCnpj(cnpj)) {
      return showAlert("Erro!", 'CNPJ inválido', 'error');;
    } 
    let response = await this.props.searchCompany(unformatMask(cnpj));
    if (response.error) return showAlert('Erro', response.msg, 'error');
  }

  render() {
    const { cnpj } = this.state;
    const { windowWidth, windowHeight } = this.props;

    return (
      <Container isMobile={isMobile(windowWidth, windowHeight)}>
        <TitleView>
          <IconDiv>
            <FaBuilding size={48} color={green}/>
          </IconDiv>
          <Title isMobile={isMobile(windowWidth, windowHeight)}>Localizador de empresa</Title>
        </TitleView>
        <InputView isMobile={isMobile(windowWidth, windowHeight)}>
          <Input type="text" value={cnpj} onChange={this.handleChange.bind(this)} placeholder='CNPJ...' maxLength='18'/>
          <Button type="button" onClick={() => this.onSubmit()}>
            <ButtonText>LOCALIZAR</ButtonText>
          </Button>
        </InputView>
      </Container>
    );
  }
}

export default windowSize(connect(undefined, { searchCompany })(Header))