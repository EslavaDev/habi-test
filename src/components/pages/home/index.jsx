import React, { useContext, useMemo } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { ApartamentsContext } from '../../../context/apartaments';
import { useMount } from '../../../hooks/use-mount';
import { Apartament } from '../../organisms/apartament';
import { Filters } from '../../organisms/filters';
import { WrapperHomeStyled } from './styled';
import { Seo } from '../../common/seo';

export const Home = () => {
  const {
    data: { apartamentsMap },
    mutations: { fetchApartaments },
  } = useContext(ApartamentsContext);
  useMount(() => {
    if (Object.values(apartamentsMap).length === 0) fetchApartaments(true);
  }, []);
  return useMemo(
    () => (
      <>
        <Seo title="Home" description="page to home" />
        <WrapperHomeStyled className="text-center">
          <Card.Header>
            <Filters />
          </Card.Header>
          <Card.Body>
            <Card.Title>Lista de apartamentos</Card.Title>
            <Container fluid>
              <Row>
                {apartamentsMap &&
                  Object.values(apartamentsMap).map(item => (
                    <Col key={item.id} md={4} xd={1} className="home__col">
                      <Apartament {...item} />
                    </Col>
                  ))}
              </Row>
            </Container>
          </Card.Body>
        </WrapperHomeStyled>
      </>
    ),
    [apartamentsMap],
  );
};
