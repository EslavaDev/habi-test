import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useContainerApartaments } from './container-theme';

const ApartamentsContext = createContext();

const ApartamentsProvider = ({ children, initialState = {} }) => {
  const contextValue = useContainerApartaments(initialState);

  return <ApartamentsContext.Provider value={contextValue}>{children}</ApartamentsContext.Provider>;
};

ApartamentsProvider.defaultProps = {
  initialState: {},
};

ApartamentsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.shape({}),
};

ApartamentsContext.displayName = 'ApartamentsContext';

export { ApartamentsProvider, ApartamentsContext };
