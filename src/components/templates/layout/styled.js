import styled from 'styled-components';

export const WrapperLayoutStyled = styled.div`
  position: relative;
  min-height: 100vh;
  .content {
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
    min-height: calc(100vh - (80px + 80px));
    flex: 1;
  }
`;
