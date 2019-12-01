import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

export class CompanyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
    };
  }

  addCompany(company) {
    const { companies } = this.state;
    this.setState({ companies: [company, ...companies] });
  }

  render() {
    const { children } = this.props;
    const { companies } = this.state;
    return (
      <Context.Provider
        value={{
          addCompany: this.addCompany.bind(this),
          companies,
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

CompanyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useCompany() {
  const { companies, addCompany } = useContext(Context);
  return { companies, addCompany };
}
