import { Heart as HeartSolid } from 'styled-icons/fa-solid';
import { Heart as HeartRegular, TrashAlt } from 'styled-icons/fa-regular';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { ApartamentsContext } from '../../../context/apartaments';
import { styledTheme } from '../../../utils/styledf-theme';

export const Actions = ({ id }) => {
  const {
    data: { apartamentsLike },
    mutations: { likeApartament, removeApartment },
  } = useContext(ApartamentsContext);

  const handleLike = () => {
    likeApartament(id);
  };
  const handleRemove = () => {
    removeApartment(id);
  };
  const statusApartment = !!apartamentsLike[id];
  return (
    <>
      <Col xs={6}>
        {!statusApartment ? (
          <HeartRegular height="20" width="20" color={styledTheme.light.colors.danger} data-testid="action-heart1" onClick={handleLike} />
        ) : (
          <HeartSolid height="20" width="20" color={styledTheme.light.colors.danger} data-testid="action-heart2" onClick={handleLike} />
        )}
      </Col>
      <Col xs={6}>
        <TrashAlt height="20" width="20" color={styledTheme.light.colors.blue_main} onClick={handleRemove} />
      </Col>
    </>
  );
};

Actions.propTypes = {
  id: PropTypes.string.isRequired,
};
