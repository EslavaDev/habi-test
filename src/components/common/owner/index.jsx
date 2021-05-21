import React from 'react';
import PropTypes from 'prop-types';

export const Owner = ({ fullname, phone, email }) => {
  return (
    <div>
      <p data-testid="owner-name">
        <strong>Name: </strong> {fullname}
      </p>
      <p data-testid="owner-phone">
        <strong>Phone: </strong> {phone}
      </p>
      <p data-testid="owner-contact">
        <strong>Contact: </strong> {email}
      </p>
    </div>
  );
};

Owner.propTypes = {
  fullname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
