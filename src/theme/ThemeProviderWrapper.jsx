/** @jsxImportSource @emotion/react */
import { ThemeProvider, Global, css } from '@emotion/react';
import { motion } from 'framer-motion';
import useDarkMode from '../hooks/useDarkMode';
import { themes } from '../constants/theme';

const ThemeProviderWrapper = ({ children }) => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <ThemeProvider theme={themes[theme]}>
      <Global styles={globalStyles(themes[theme])} />
      {children}
      <motion.button
        onClick={toggleTheme}
        css={themeToggle(theme)}
        initial={{ scale: 0.9, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        animate={{ scale: 1, opacity: 1, rotate: theme === 'light' ? 0 : 360 }}
        transition={{ duration:0.3, type: 'spring', stiffness: 300, damping: 20 }}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '☀️' : '🌙'}
      </motion.button>
    </ThemeProvider>
  );
};

const globalStyles = theme => css`
  body {
    margin: 0;
    padding: 0;
    background: ${theme.background};
    color: ${theme.text};
    font-family: 'Inter', sans-serif;
    transition: background 0.3s ease, color 0.3s ease;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: ${theme.primary};
    text-decoration: none;
  }
`;

const themeToggle = mode => css`
  position: fixed;
  bottom: 1.5rem;
  right: 1rem;
  border: none;
  padding: .75rem;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  transition: background 0.3s ease;
  background: ${mode === 'light' ? '#ffdd57' : '#1e3a8a'};
  color: ${mode === 'light' ? '#000' : '#fff'};

  &:hover {
    background: ${mode === 'light' ? '#ffe680' : '#2c4fcf'};
  }
`;

export default ThemeProviderWrapper;
