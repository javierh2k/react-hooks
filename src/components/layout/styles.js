import styled, { css } from 'styled-components/macro';
import { Link } from 'react-navi';

import { Button } from '@bootstrap-styled/v4';
import { Menu } from 'styled-icons/feather/Menu';
import { Home } from 'styled-icons/boxicons-regular/Home';
import { Album } from 'styled-icons/boxicons-regular/Album';

const iconsStyles = css`
  color: #ce4b4b;
  width: 20px;
  margin: 0 10px;
`;

export const MenuIcon = styled(Menu)`
  color: white;
  width: 30px;
  cursor: pointer;
`;

export const HomeIcon = styled(Home)`
  ${iconsStyles}
`;

export const AboutIcon = styled(Album)`
  ${iconsStyles}
`;

const activeClassName = 'layout-link-active';

export const NavLink = styled(Link).attrs({
  activeClassName,
})`

color: ${({ theme }) => theme.lightTextColor};
text-decoration: none;
transition: color 150ms ease-out;

&.${activeClassName} {
  color: #ce4b4b !important;
  font-weight: bold;
  border-right: 3px solid #ce4b4b;
  /* ${({ theme }) => theme.primaryColor}; */
  /* background: ${({ type }) =>
    type === 'user' ? 'var(--primary-color)' : 'var(--secondary-color)'}; */
}
`;

export const Header = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ce4b4b;
  height: 55px;
  z-index: 10;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: row;
`;

export const Main = styled.main`
  /* margin-top: calc(1.5rem + 64px); */
  margin-left: 200px;
  background: #eee;
  padding: 10px;
  height: 100vh;
`;

export const Title = styled.div`
  color: white;
  font-size: 18px;
`;

export const App = styled.main`
  margin-top: 55px;
`;

export const Sidebar = styled.div`
  height: calc(100vh - 55px);
  position: fixed;
  z-index: 1019;
  margin: 0;

  padding: 0;
  color: #fff;
  background: #2f353a;

  .nav {
    width: 200px;
    flex-direction: column;
    min-height: 100%;
    margin: 0;
    padding: 0;

    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .nav-link {
    display: flex;
    align-items: center;

    padding: 0.75rem 1rem;
    color: #fff;
    text-decoration: none;
    background: 0 0;
  }

  .nav-link.active {
    color: #fff;
    background: #3a4248;
  }

  .nav-link.active .nav-icon {
    color: #20a8d8;
  }

  .nav-link .nav-icon {
    display: inline-block;
    width: 1.09375rem;
    margin: 0 0.5rem 0 0;
    font-size: 0.875rem;
    color: #73818f;
    text-align: center;
  }

  .nav-link .badge {
    float: right;
    margin-top: 2px;
  }
  .badge-info {
    color: #23282c;
    background-color: #63c2de;
  }
  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
  }

  .nav-item:hover > .nav-link {
    background: #20a8d8;
  }
`;
