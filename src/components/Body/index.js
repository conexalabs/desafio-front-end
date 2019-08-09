import React, { Component } from 'react';
import { Container, IconView, List, Flat, LabelCompany, SearchCompanyView, ImageCompany } from './styles';
import CardCompany from '../CardCompany';
import { white } from '../../contants/color';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { connect } from 'react-redux';
import { getCompanies } from '../../actions/company';
import image from '../../images/picture.jpg'

class Body extends Component {

  componentWillMount() {
    this.props.getCompanies();
  }

  render() {
    const { companies } = this.props;

    return (
      <Container>
          <IconView>
            { companies.length > 4 && <FaChevronLeft size={48} color={white} /> }
          </IconView>
      
          { !!companies.length ?
            <List>
              { !!companies.length && companies.map(company => {
                return (
                  <CardCompany company={company} key={company.id}/>
                )
              })}
            </List> : 
            <SearchCompanyView>
              <ImageCompany src={image}/>
              <LabelCompany>Localize acima a primeira empresa</LabelCompany>
            </SearchCompanyView>         
          }
        <IconView>
          { companies.length > 4 && <FaChevronRight size={48} color={white} /> }
        </IconView>
      </Container>
    );
  }
}

function mapStateToProps({company}) {
  return {
    companies: company.companies
  }
}

export default connect(mapStateToProps, { getCompanies })(Body)