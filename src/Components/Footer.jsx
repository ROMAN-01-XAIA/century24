/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer css={footer}>
      <p>© {year} Century24 Estates. All rights reserved.</p>
      <div css={social}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

const footer = css`
  background: #222;
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.9rem;
`;

const social = css`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: #ffb347;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffc76b;
    }
  }
`;

export default Footer;
