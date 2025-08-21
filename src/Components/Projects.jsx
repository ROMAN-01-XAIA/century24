/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { spacing, breakpoints } from '../constants/theme';

const projects = [
  { title: 'Marble Vanities', image: '/assets/Bathroom.jpg' },
  { title: 'Porch', image: '/assets/Porch.jpg' },
  { title: 'Security Doors', image: '/assets/DoorWay.jpg' },
  { title: 'Chandelier', image: '/assets/Chandelier.jpg' },
  { title: 'Kitchen', image: '/assets/Wide Kitchen.jpg' },
  { title: 'DriveWay', image: '/assets/DriveWay.jpg' },
  { title: 'Bathroom ', image: '/assets/RestRoom.jpg' },
  { title: 'Pavement', image: '/assets/Pavement.jpg' },
];

const Projects = () => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const visibleCount = isMobile ? 1 : 2;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + visibleCount) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [visibleCount]);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(projects[(index + i) % projects.length]);
    }
    return visible;
  };

  return (
    <section id='projects' css={sectionStyles(theme)}>
      <h2 css={heading}>Featured Projects</h2>
      <div css={grid(visibleCount)}>
        {getVisibleProjects().map((project, i) => (
          <div key={i} css={card(theme)}>
            <AnimatePresence mode="wait">
              <motion.img
                key={project.image}
                src={project.image}
                alt={project.title}
                loading="lazy"
                css={image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.h3
                key={project.title}
                css={title(theme)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {project.title}
              </motion.h3>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
const sectionStyles = theme => css`
  padding: ${spacing.sm};
  background: ${theme.background};
  color: ${theme.text};
  text-align: center;

  @media (max-width: ${breakpoints.md}) {
   padding: ${spacing.xl};
  }
`;

const heading = css`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: ${spacing.lg};
`;

const grid = count => css`
  display: grid;
  grid-template-columns: repeat(${count}, 1fr);
  gap: ${spacing.xl};
  width: 100%;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: ${spacing.sm};
  }
`;

const card = theme => css`
  position: relative;
  height: 340px;
  overflow: hidden;
  border-radius: 10px;
  background: ${theme.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const image = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const title = theme => css`
  position: relative;
  z-index: 2;
  padding: ${spacing.sm};
  font-size: 1.2rem;
  font-weight: 600;
  color: ${theme.primary};
  text-shadow: 0 2px 6px rgba(0,0,0,0.4);
  background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
  max-width: 220px;
  border-radius: 10px;
`;

export default Projects;
