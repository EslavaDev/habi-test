import { css } from 'styled-components';

export const flex = ({ alignItems = 'stretch', justifyContent = 'flex-start', direction = 'row', text = 'center' }) =>
  css`
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-direction: ${direction};
    text-align: ${text};
  `;
