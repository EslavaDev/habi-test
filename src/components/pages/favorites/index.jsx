import React, { useContext, useMemo } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { ApartamentsContext } from '../../../context/apartaments';
import { Apartament } from '../../organisms/apartament';
import { WrapperHomeStyled } from './styled';
import { Seo } from '../../common/seo';

export const Favorites = () => {
  const {
    data: { apartamentsLike },
  } = useContext(ApartamentsContext);
  return useMemo(
    () => (
      <>
        <Seo title="Favorites" description="page to favorites" />
        <WrapperHomeStyled className="text-center">
          <Card.Body>
            <Card.Title>Lista de apartamentos filtrados</Card.Title>
            <Container fluid>
              <Row>
                {apartamentsLike &&
                  Object.values(apartamentsLike).map(item => (
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
    [apartamentsLike],
  );
};
