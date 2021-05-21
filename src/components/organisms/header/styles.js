import styled from 'styled-components';
import { flex } from '../../../utils/mixins';

export const WrapperHeaderStyled = styled.header`
  .navbar {
    background-color: ${({ theme }) => theme.colors.purple};
    height: 80px;
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })};
  }

  .navbar__text {
    ${flex({ alignItems: 'center', justifyContent: 'flex-end' })};
    margin-right: 10px;
  }

  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    transition: 500ms;
    background: none;
    cursor: pointer;
  }
  .menu-bars-active {
    transition: 450ms;
    margin-left: -2rem;
    transform: rotate(90deg);
    font-size: 2rem;
    background: none;
  }

  .nav-menu {
    background-color: ${({ theme }) => theme.colors.purple};
    width: 20%;
    z-index: 100;
    height: 100vh;
    ${flex({ alignItems: 'flex-start', direction: 'column' })};

    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
  }

  .nav-menu.active {
    left: 0;
    transition: 450ms;
    margin-top: calc(3vh - 10px);
  }

  .nav-text {
    ${flex({ alignItems: 'center' })};
    padding: 8px 16px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    ${flex({ alignItems: 'center' })};
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: ${({ theme }) => theme.colors.orange};
  }
  .selected {
    background-color: ${({ theme }) => theme.colors.orange};
  }

  .nav-menu-items {
    width: 100%;
    padding: 0;
  }

  .navbar-toggle {
    width: 100%;
    height: 80px;
    ${flex({ alignItems: 'center' })};
  }

  span {
    margin-left: 0px;
  }

  @media (max-width: 769px) {
    .nav-menu {
      width: 180px;
    }
    .nav-menu.active {
      margin-top: 0px;
    }
  }
`;
