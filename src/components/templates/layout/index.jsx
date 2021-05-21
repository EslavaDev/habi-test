import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import { Header } from '../../organisms/header';
import { WrapperLayoutStyled } from './styled';
import { Footer } from '../../common/footer';

export const Layout = ({ children }) => {
  return (
    <WrapperLayoutStyled>
      <Header />
      <Container className="content">{children}</Container>
      <Footer />
    </WrapperLayoutStyled>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
