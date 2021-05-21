import styled from 'styled-components';
import { flex } from '../../../utils/mixins';

export const WrapperFilterStyled = styled.div`
  padding: 10px;

  .form-filter__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  form > .row {
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
  }

  @media (max-width: 769px) {
    padding: 0px;
    .form-filter__container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 20px;
    }
  }
`;
