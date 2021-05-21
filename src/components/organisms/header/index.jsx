/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useCallback, useMemo } from 'react';
import { Badge } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Bars, Times, Heart } from 'styled-icons/fa-solid';
import { ApartamentsContext } from '../../../context/apartaments';
import { styledTheme } from '../../../utils/styledf-theme';
import { SidebarData } from './sede-data';
import { WrapperHeaderStyled } from './styles';

export const Header = () => {
  const {
    data: { apartamentsLike },
  } = useContext(ApartamentsContext);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = useCallback(() => setSidebar(prev => !prev), []);

  const badgeNumber = useMemo(() => <Badge variant="light">{Object.values(apartamentsLike).length}</Badge>, [apartamentsLike]);
  return (
    <WrapperHeaderStyled>
      <div className="navbar">
        <div className={sidebar ? 'menu-bars-active' : 'menu-bars'}>
          <Bars height="36" width="36" color="#fff" onClick={showSidebar} />
        </div>
        <div className="navbar__text">
          <Link
            to="/favorites"
            style={{
              marginRight: 10,
              border: '1px solid red',
              display: 'flex',
              justifyContent: 'center',
              padding: '2px 4px',
              borderRadius: '10%',
              backgroundColor: styledTheme.light.colors.danger,
            }}>
            <Heart height="20" width="20" color={styledTheme.light.colors.gray} />
            {badgeNumber}
          </Link>
          <h3 style={{ color: styledTheme.light.colors.white }}>PorkyHouse</h3>
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className="menu-bars">
          <Times height="36" width="36" color="#fff" onClick={showSidebar} />
        </div>
        <ul className="nav-menu-items" onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key={(index + 1).toFixed()} className={item.cName}>
                <NavLink
                  to={item.path}
                  exact
                  strict
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: 'bold',
                  }}>
                  {/*    {item.icon} */}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </WrapperHeaderStyled>
  );
};
