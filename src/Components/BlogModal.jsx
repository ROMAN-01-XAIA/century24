/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogModal = ({ post, onClose }) => {
  const theme = useTheme();
  if (!post) return null;

  return (
    <AnimatePresence>
      <motion.div
        css={overlay(theme)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          css={modal(theme)}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img src={post.image} alt={post.title} css={image} />
          <h3 css={titleStyle(theme)}>{post.title}</h3>
          <p><strong>{post.date}</strong></p>
          <p>{post.description}</p>
          <p css={meta}>
            <strong>{post.author}</strong> · {post.readTime}
          </p>
          <div css={tagList}>
              {post.tags.map(tag => (
                <span 
                    key={tag} 
                    css={tagStyle}>
                      {tag}
                </span>
              ))}
           </div>

          <button css={closeButton} onClick={onClose}>Close</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const overlay = theme => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 96vh;
  background: ${theme.background};
  color: ${theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const modal = theme => css`
  background: ${theme.card};
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  text-align: left;
  position: relative;
`;

const image = css`
  width: 100%;
  height: 330px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
`;

const titleStyle = theme => css`
  color: ${theme.primary};
`;

const meta = css`
  font-size: 0.9rem;
  color: #666;
  margin: 0.5rem 0 1rem;
`;

const tagList = css`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const tagStyle = css`
  background: #e0f0ff;
  color: #0077cc;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const closeButton = css`
  margin-top: 1.5rem;
  background: #646464ff;
  color: #00ccffff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

export default BlogModal;
