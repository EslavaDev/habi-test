import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Seo = ({ title, description }) => (
  <Helmet
    htmlAttributes={{ lang: 'es' }}
    title={title}
    titleTemplate={`%s | ${title}-hb-front`}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        name: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ]}
  />
);

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
