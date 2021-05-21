import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { Theme } from './components/templates/theme';
import { ApartamentsProvider } from './context/apartaments';
import { InitialStateApartaments } from './context/apartaments/initial-state';
import { ThemeProvider } from './context/theme';
import { RoutesApp } from './routes/routes';

export const App = () => (
  <ThemeProvider>
    <ApartamentsProvider initialState={InitialStateApartaments}>
      <Theme>
        <HelmetProvider context={{}}>
          <RoutesApp />
        </HelmetProvider>
      </Theme>
    </ApartamentsProvider>
  </ThemeProvider>
);
