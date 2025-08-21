/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const About = () => (
  <section id='about' css={section}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>About <span>Century24</span> Estates</h2>
      <p>
        <span>Century24</span> Estates is a Lusaka-based real estate development company specializing in creation of high-quality residential properties, we offer expertise in all phases of development, from site selection and acquisition to construction and project management.
        <br />
        
        <br />
        From concept to completion, we’re driven by precision, sustainability, and a deep respect for the communities we serve. Every project is a reflection of our commitment to excellence and our belief that luxury should be intuitive, not complicated.
      </p>
    </motion.div>
  </section>
);

const section = css`
  padding: 4rem 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  span {
    color: #ff0000ff;
  }
`;

export default About;
