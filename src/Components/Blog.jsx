/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { spacing, breakpoints } from '../constants/theme';
import { motion } from 'framer-motion';
import { useState } from 'react';
import BlogModal from './BlogModal';
const posts = [
  {
    title: 'Navigate Your Journey With Confidence',
    date: 'Aug 2025',
    image: '/assets/DriveWay.jpg',
    author: 'Mukuka Mumbi',
    tags: ['Buying', 'Finance'],
    readTime: '3 min read',
    description:
      'Buying your first home can be overwhelming. From budgeting to choosing the right location, there are many factors to consider. We break down the essentials to help you get started with confidence.',
  },
  {
    title: 'Discover Lusaka’s Rising Potential',
    date: 'Jul 2025',
    image: '/assets/Cabinet.jpg',
    author: 'David Katongo Mumbi',
    tags: ['Investment', 'Lusaka'],
    readTime: '4 min read',
    description:
      'Lusaka is emerging as a real estate hotspot. With rapid urban growth and infrastructure development, investors are finding lucrative opportunities. Discover why Lusaka should be on your radar.',
  },
];


const Blog = () => {
  const theme = useTheme(); 
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id='blogs' css={section}>
      <h2>Latest Blog Posts</h2>
      <div css={grid}>
        {posts.map((post) => (
          <motion.div
            key={post.title}
            css={card(theme)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <img src={post.image} alt={post.title} css={image} />
            <h3 css={titleStyle(theme)}>{post.title}</h3>
            <p css={description(theme)}>
              {post.description.split('. ')[0] + '.'}
            </p>
            <p css={meta}>
              <strong>{post.author}</strong> · {post.readTime}
            </p>
            <div css={tagList}>
              {post.tags.map(tag => (
                <span key={tag} css={tagStyle}>{tag}</span>
              ))}
            </div>
            <button css={button} onClick={() => setSelectedPost(post)}>
              Read more
            </button>
          </motion.div>
        ))}
      </div>
      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
};

const section = css`
  padding: ${spacing.lg};
  text-align: center;

  @media (max-width: ${breakpoints.sm}) {
    padding: ${spacing.sm};
  }
`;

const grid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1080px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const card = theme => css`
  background: ${theme.card};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: left;
  overflow: hidden;
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

const description = theme => css`
  color: ${theme.text};
`;

const tagStyle = css`
  background: #e0f0ff;
  color: #0077cc;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const button = css`
  margin-top: 1rem;
  background: #0077cc;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: #005fa3;
  }
`;

export default Blog;
