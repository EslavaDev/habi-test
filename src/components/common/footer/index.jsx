import React from 'react';
import { WrapperFooterStyled } from './styled';

export const Footer = () => {
  return <WrapperFooterStyled>© {new Date().getFullYear()} Created by Daniel Eslava (PorkyHouse)</WrapperFooterStyled>;
};
