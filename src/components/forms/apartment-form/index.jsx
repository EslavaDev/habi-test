import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FieldInput } from '../../common/field-input';
import { FieldSelect } from '../../common/field-select';
import { locations } from '../../../utils/constants';
import { ApartamentsContext } from '../../../context/apartaments';

export const AddApartmentForm = () => {
  const {
    mutations: { addApartament },
  } = useContext(ApartamentsContext);

  const { push } = useHistory();

  return (
    <Formik
      initialValues={{
        address: '',
        city: '',
        location: '',
        date: '',
        area: 0,
        price: 0,
        rooms: 0,
        owner: {
          fullname: '',
          phone: '',
          email: '',
        },
      }}
      enableReinitialize
      onSubmit={(values, actions) => {
        addApartament(values);
        actions.resetForm();
        push('/');
      }}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="container">
          <Container fluid>
            <Row>
              <Col xs={12} md={6}>
                <FieldInput name="city" type="text" />
              </Col>
              <Col xs={12} md={6}>
                <FieldInput name="area" type="number" />
              </Col>
              <Col xs={12}>
                <FieldInput name="address" type="text" />
              </Col>
              <Col xs={12} md={6}>
                <FieldInput name="rooms" type="number" />
              </Col>
              <Col xs={12} md={6}>
                <FieldInput name="price" type="number" />
              </Col>

              <Col xs={12} md={6}>
                <FieldInput name="date" type="date" />
              </Col>
              <Col xs={12} md={6}>
                <FieldSelect name="location" list={locations} />
              </Col>
              <h2>Owner</h2>
              <Col xs={12} md={6}>
                <FieldInput name="owner.fullname" label="fullName" type="text" />
              </Col>
              <Col xs={12} md={6}>
                <FieldInput name="owner.phone" label="phone" type="text" />
              </Col>
              <Col xs={12} md={12}>
                <FieldInput name="owner.email" label="email" type="email" />
              </Col>
              <Col xs={12}>
                <Button variant="success" type="submit" style={{ width: '70%' }}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </form>
      )}
    </Formik>
  );
};
