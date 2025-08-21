/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { spacing, breakpoints } from '../constants/theme';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

const testimonials = [
  {
    name: 'Natasha Chisenga.',
    quote: 'Century24 helped me find my dream home. The design, the tech, the service — everything exceeded expectations.',
    avatar: 'https://i.pravatar.cc/100?u=leya',
  },
  {
    name: 'Mutale Mwanza.',
    quote: 'Professional and renowned. My apartment is not just beautiful, it’s intelligent.',
    avatar: 'https://i.pravatar.cc/100?u=kuda',
  },
  {
    name: 'Chisha Bwalya.',
    quote: 'Precise and reliable. Century24 are true property developers with a vision.',
    avatar: 'https://i.pravatar.cc/100?u=chisha',
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const wrapperRef = useRef(null);
  const [carouselHeight, setCarouselHeight] = useState(null);
  const y = useMotionValue(0);
  const paused = useRef(false);
  const speed = 0.3;

  useEffect(() => {
    if (wrapperRef.current) {
      const height = wrapperRef.current.scrollHeight;
      setCarouselHeight(height);
    }
  }, []);

  useAnimationFrame(() => {
    if (!paused.current && carouselHeight) {
      const currentY = y.get() - speed;
      const loopHeight = carouselHeight / 2;
      y.set(currentY % loopHeight);
    }
  });

  const handlePause = () => (paused.current = true);
  const handleResume = () => (paused.current = false);

  return (
    <section id='testimonials' css={section}>
      <div css={content(theme)}>
        <h2>What Our Clients Say</h2>
        <p>
          We’ve helped hundreds of people find their perfect home. Our clients love our modern designs,
          professional service, and reliable development process.
        </p>
      </div>

      <div
        ref={wrapperRef}
        css={carouselWrapper}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      >
        <motion.div css={slider} style={{ y }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              css={card(theme)}
              initial={{ opacity: 0, filter: 'blur(12px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: i * 0.3 }}
            >
              <img src={t.avatar} alt={t.name} css={avatar} />
              <p>"{t.quote}"</p>
              <h4 css={nameStyles(theme)}>~ {t.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const section = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing.xl};
  margin-top: ${spacing.lg};
  gap: 4rem;
  height: 500px;
  overflow: hidden;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    height: auto;
    padding: ${spacing.md};
    gap: 2rem;
  }
`;

const content = theme => css`
  flex: 1;
  color: ${theme.text};
  max-width: 500px;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const carouselWrapper = css`
  width: 320px;
  height: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to top, transparent 0%, black 6rem, black calc(100% - 6rem), transparent 100%);
  -webkit-mask-image: linear-gradient(to top, transparent 0%, black 6rem, black calc(100% - 6rem), transparent 100%);
`;

const slider = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const card = theme => css`
  background: ${theme.card};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  color: ${theme.text};
  text-align: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px ${theme.accent};
    transform: translateY(-4px);
  }

  @media (max-width: ${breakpoints.sm}) {
    &:hover {
      box-shadow: none;
      transform: none;
    }
  }
`;

const nameStyles = theme => css`
  color: ${theme.primary};
  margin-top: 1rem;
`;

const avatar = css`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export default Testimonials;
