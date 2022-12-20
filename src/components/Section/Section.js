import React from 'react';
import PropTypes from 'prop-types';

import * as SC from './Section.style';

export const Section = ({ title, children }) => (
  <SC.Section>
    <SC.Container>
      <SC.Title>{title}</SC.Title>
      {children}
    </SC.Container>
  </SC.Section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
