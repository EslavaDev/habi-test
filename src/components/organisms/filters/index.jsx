import React from 'react';

import { WrapperFilterStyled } from './styled';
import { FiltersForm } from '../../forms/filter-form';

export const Filters = () => {
  return (
    <WrapperFilterStyled>
      <FiltersForm />
    </WrapperFilterStyled>
  );
};
