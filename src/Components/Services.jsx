/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import { spacing, breakpoints} from '../constants/theme';

const services = [
  { icon: '🏠', title: 'Property Development' },
  { icon: '📐', title: 'Land Acquisition & Planning' },
  { icon: '🔧', title: 'Project Management' },
  { icon: '🔧', title: 'Building Construction' },
];

const Services = () => {
  const theme = useTheme(); 

  return (
    <section id='services' css={section(theme)}>
      <h2>Our Services</h2>
      <div css={grid}>
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            css={card(theme)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <span css={icon}>{s.icon}</span>
            <h3>{s.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


const section = theme => css`
  padding: ${spacing.sm} ${spacing.md};
  text-align: center;
  color: ${theme.text};

  @media (max-width: ${breakpoints.sm}) {
    padding: ${spacing.sm}
  }
`;

const grid = css`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const card = theme => css`
  background: ${theme.card};
  color: ${theme.text};
  padding: 2rem;
  border-radius: 8px;
  width: 320px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: background 0.3s ease, color 0.3s ease;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

const icon = css`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export default Services;
