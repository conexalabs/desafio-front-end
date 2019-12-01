/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

const MaskCNPJ = ({ inputRef, ...others }) => (
  <MaskedInput
    {...others}
    mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
    className="header__cnpjMask"
    guide={false}
  />
);

MaskCNPJ.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default MaskCNPJ;
