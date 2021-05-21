import React from 'react';
import { Card } from 'react-bootstrap';
import { WrapperHomeStyled } from './styled';
import { Seo } from '../../common/seo';
import { AddApartmentForm } from '../../forms/apartment-form';

export const AddApartment = () => {
  return (
    <>
      <Seo title="Add Apartment" description="page to add-apartment" />
      <WrapperHomeStyled className="text-center">
        <Card.Header>
          <Card.Title>Agregar Apartamento</Card.Title>
        </Card.Header>
        <Card.Body>
          <AddApartmentForm />
        </Card.Body>
      </WrapperHomeStyled>
    </>
  );
};
