/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useOnClickOutside from '../hooks/useOnClickOutside';

const Header = () => {
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setMenuOpen(false));

  return (
    <header ref={menuRef} css={headerStyles(theme)}>
      <Logo>
        <img className="logo" src='/assets/favicon.jpg' alt='Logo' />
        <span>Century24</span> Estates
      </Logo>

      <Nav>
        <NavList>
          {['Home', 'About', 'Services', 'Projects', 'Blogs', 'Testimonials', 'Contact'].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </NavList>
        
        <Burger
          onClick={() => setMenuOpen(!menuOpen)}
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {menuOpen ? '✖' : '☰'}
        </Burger>
      </Nav>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {['Home', 'About', 'Services', 'Projects', 'Blogs', 'Testimonials', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </header>
  );
};

const headerStyles = theme => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);

  
  span {
    color: ${theme.primary};
  }
`;

const Logo = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #203a43;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: .5rem;

  .logo {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }

  li a {
    text-decoration: none;
    color: #2c5364;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ffb347;
    }
  }
`;
const Burger = styled(motion.button)`
  font-size: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #2c5364;
  z-index: 100;

  @media (min-width: 769px) {
    display: none;
  }
`;


const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 99;

  a {
    margin: 1rem 0;
    text-decoration: none;
    color: #2c5364;
    font-weight: 500;
    font-size: 1.1rem;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.05);
      color: #ffb347;
    }
  }
`;

export default Header;
