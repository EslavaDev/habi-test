import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useContainerTheme } from './container-theme';

const ThemeContext = createContext();

const ThemeProvider = ({ children, initialState = {} }) => {
  const contextValue = useContainerTheme(initialState);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

ThemeProvider.defaultProps = {
  initialState: {},
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.shape({}),
};

ThemeContext.displayName = 'ThemeContext';

export { ThemeProvider, ThemeContext };
