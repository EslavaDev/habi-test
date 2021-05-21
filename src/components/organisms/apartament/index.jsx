import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Image, Row } from 'react-bootstrap';

import { WrapperApartamentListStyled } from './styled';
import Logo from '../../../assets/images/logo.png';
import { Actions } from '../../common/actions';
import { Owner } from '../../common/owner';
import { formatCurrency } from '../../../utils/converts';

export const Apartament = props => {
  const { id, area, rooms, city, location, price, date, address, owner } = props;

  return (
    <WrapperApartamentListStyled fluid>
      <Image alt={id} src={Logo} thumbnail />
      <div className="apartament__body">
        <section>
          <strong>Apartament in </strong>
          <strong>{city}</strong> - <strong>{address}</strong>
        </section>
      </div>

      <Row className="apartament__body-row">
        <Col xs={6}>
          <p>
            {area}
            <strong> Mts </strong>
          </p>
        </Col>
        <Col xs={6}>
          <p>
            {rooms} <strong> Rooms </strong>
          </p>
        </Col>
        <Owner {...owner} />
        <Col xs={12}>
          <strong>Price: {formatCurrency('CO', price)} </strong>
        </Col>
        <Actions id={id} />
      </Row>
      <div className="apartament__footer">
        <strong>
          {location} - {date}
        </strong>

        <Button variant="outline-info" block>
          Detail
        </Button>
      </div>
    </WrapperApartamentListStyled>
  );
};

Apartament.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rooms: PropTypes.number.isRequired,
  owner: PropTypes.objectOf(PropTypes.string).isRequired,
};
