import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../../context/theme';
import { styledTheme } from '../../../utils/styledf-theme';

export const Theme = ({ children }) => {
  const {
    data: { theme },
  } = useContext(ThemeContext); // get the current theme ('light' or 'dark')
  return <ThemeProvider theme={styledTheme[theme]}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
