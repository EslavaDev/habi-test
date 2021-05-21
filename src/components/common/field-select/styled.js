import styled from 'styled-components';
import { flex } from '../../../utils/mixins';

export const WrapperFieldStyled = styled.div`
  border: 1px solid #aaa;
  font-size: ${({ theme }) => theme.fontSize.size_20};
  width: 100%;
  padding: 10px;
  border: none;
  ${flex({ alignItems: 'center', justifyContent: 'center' })}

  .field__container {
    width: 100%;
    ${flex({ direction: 'column' })}
  }

  .field__label {
    text-align: left;
  }

  .field__container > select {
    min-height: 28px;
  }

  .field__input-error {
    color: ${({ theme }) => theme.colors.red};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.size_12};
  }
`;
