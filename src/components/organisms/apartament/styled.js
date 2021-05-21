import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { flex } from '../../../utils/mixins';

export const WrapperApartamentListStyled = styled(Container)`
  border: 1px solid ${({ theme }) => theme.colors.purple};
  padding-top: 15px;
  ${flex({ alignItems: 'center', justifyContent: 'center', text: 'center', direction: 'column' })}

  height: 100%;
  padding-bottom: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  & > .img-thumbnail {
    border: none;
  }
  .apartament__footer {
    height: 100%;
    width: 100%;
    ${flex({ alignItems: 'center', justifyContent: 'flex-end', text: 'center', direction: 'column' })}
  }
  .apartament__footer > strong {
    opacity: 0.7;
  }
  .apartament__footer > button {
    width: 100%;
  }
  .apartament__body-row {
    margin-bottom: 15px;
  }
`;
