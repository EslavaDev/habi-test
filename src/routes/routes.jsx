import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Layout } from '../components/templates/layout';
import { routesList } from './routes-list';

export const RoutesApp = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {routesList.map(({ title, ...route }) => (
          <Route key={title} {...route} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Layout>
  </BrowserRouter>
);
