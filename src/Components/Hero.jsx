/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { spacing } from '../constants/theme';

const Hero = () => {
  return (
    <Section id='home'>
      <Content
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading className='oswald'>Innovation Meets Luxury</Heading>
        <Subheading className='montserrat'>Discover a new standard of living with Zambia’s premier real estate developer.
          
        Explore our developments. Experience the future of home.
        </Subheading>
        <CTA href="#projects">Browse Listings</CTA>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  height: 90vh;
  background-image: url(/assets/Villa.JPG);
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const Content = styled(motion.div)`
  max-width: 700px;
  background: rgba(0,0,0,0.4);
  padding: 0 ${spacing.md} ${spacing.lg} ${spacing.md};
  border-radius: 6px;

`;

const Heading = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;

  span {
    color: #ff0000ff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTA = styled.a`
  display: inline-block;
  background: #ffb347;
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #ffc76b;
  }
`;

export default Hero;
