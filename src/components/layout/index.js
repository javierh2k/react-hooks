import React from 'react';
import LoadingIndicator from '../LoadingIndicator';
import {
  App,
  MenuIcon,
  Title,
  Sidebar,
  Header,
  NavLink,
  AboutIcon,
  HomeIcon,
  Main,
} from './styles';

export const Layout = ({ children, isLoading }) => (
  <>
    <LoadingIndicator active={isLoading} />
    <App>
      <Header>
        <MenuIcon></MenuIcon>
        <Title>Administrador Zero</Title>
      </Header>
      <Sidebar>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#/dashboard" aria-current="page">
              <i className="nav-icon icon-speedometer"></i>
              Dashboard<span className="badge badge-info">NEW</span>
            </a>
          </li>

          <li className="nav-item">
            <NavLink href="/" exact className="nav-link">
              <HomeIcon /> Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink href="/about" exact className="nav-link">
              <AboutIcon /> About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink href="/counter" exact className="nav-link">
              <AboutIcon /> Counter
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink href="/users" exact className="nav-link">
              <AboutIcon /> User
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink href="/404" exact className="nav-link">
              404
            </NavLink>
          </li>
        </ul>
      </Sidebar>
      <Main>{children}</Main>
    </App>
  </>
);

// export default Layout;
