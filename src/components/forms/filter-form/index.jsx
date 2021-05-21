import React, { useCallback, useContext } from 'react';
import { Formik } from 'formik';
import { Button, Col, Row } from 'react-bootstrap';
import { FieldInput } from '../../common/field-input';
import { FieldSelect } from '../../common/field-select';
import { locations } from '../../../utils/constants';
import { ApartamentsContext } from '../../../context/apartaments';

export const FiltersForm = () => {
  const {
    mutations: { fetchApartaments, filterApartaments },
  } = useContext(ApartamentsContext);

  const handleResetList = useCallback(() => fetchApartaments(false), [fetchApartaments]);
  return (
    <Formik
      initialValues={{ location: '', date: '' }}
      enableReinitialize
      onSubmit={(values, actions) => {
        filterApartaments(values);
        actions.resetForm();
      }}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="container">
          <Row>
            <Col md={4}>
              <FieldInput name="date" type="date" />
            </Col>
            <Col md={4}>
              <FieldSelect name="location" list={locations} />
            </Col>
            <Col md={2} xs={6}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col md={2} xs={6}>
              <Button variant="warning" onClick={handleResetList}>
                Reset
              </Button>
            </Col>
          </Row>
        </form>
      )}
    </Formik>
  );
};
