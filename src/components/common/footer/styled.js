import styled from 'styled-components';
import { flex } from '../../../utils/mixins';

export const WrapperFooterStyled = styled.footer`
  ${flex({ alignItems: 'center', justifyContent: 'center' })};
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1rem;
  height: 80px;
`;
