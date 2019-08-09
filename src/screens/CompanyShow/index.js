import React, { Component } from 'react';
import GoogleMapsContainer from '../../components/GoogleMaps';
import CardCompanyMaps from '../../components/CardCompanyMaps';
import { Container } from './styles';
import { getLatLng } from '../../services/helpers';
import { connect } from 'react-redux'
import Spinner from '../../components/Spinner';

// import { Container } from './styles';

class CompanyShow extends Component {
  
  state = {
    geometry: undefined
  }
  
  async componentWillMount() {
    const { companyShow, history } = this.props;
    if (!companyShow) {
      return history.push('/')
    }
    let geometry = await getLatLng(companyShow);
    this.setState({geometry});
  }

  render() {
    const { companyShow } = this.props;
    const { geometry } = this.state;
    return (
      <Container>
        { (!companyShow || !geometry) ?
          <Spinner/> : 
          <>
            <CardCompanyMaps company={companyShow}/>
            <GoogleMapsContainer geometry={geometry}/>
          </>
        }
      </Container>
    );
  }
}

function mapStateToProps({company}) {
  return {
    companyShow: company.company,
  }
}

export default connect(mapStateToProps, {})(CompanyShow)