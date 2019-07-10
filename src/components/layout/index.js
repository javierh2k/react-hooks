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
        <Title>Administrador</Title>
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
            <NavLink href="/users" exact className="nav-link">
              <AboutIcon /> User
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink href="/employees" exact className="nav-link">
              <AboutIcon /> Empleados
            </NavLink>
          </li>
        </ul>
      </Sidebar>
      <Main>{children}</Main>
    </App>
  </>
);
