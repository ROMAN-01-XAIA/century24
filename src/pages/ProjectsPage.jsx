/** @jsxImportSource @emotion/react */
import { Helmet } from 'react-helmet';
import { css, useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { spacing, breakpoints } from '../constants/theme';
import Footer from '../Components/Footer';
import Contact from './Contact';
import { Link } from 'react-router-dom';


const listings = [
  {
    title: 'Luxury Villa',
    images: ['/assets/Cabinet.jpg', '/assets/DoorWay.jpg', '/assets/Kitchen.jpg', '/assets/Wide Windows.jpg', '/assets/KitchenFront.jpg'],
    description: 'Spacious 5-bedroom villa with smart home integration and solar roofing.',
    price: '$45,000',
    location: 'Lusaka, Zambia',
    type: 'Sale',
  },
  {
    title: 'Modern Apartment',
    images: ['/assets/DriveWay.jpg', '/assets/KitchenFront.jpg', '/assets/Pool.jpg', '/assets/Lawn.jpg', '/assets/Lounge.jpg'],
    description: '2-bedroom apartment with biometric access and panoramic views.',
    price: '$1,200/month',
    location: 'Ibex Hill, Lusaka',
    type: 'Rent',
  },
  {
    title: 'Commercial Space',
    images: ['/assets/Pavement.jpg', '/assets/RestRoom.jpg', '/assets/Pool Area.jpg', '/assets/Air Conditioning.jpg', '/assets/Chandalier.jpg'],
    description: 'Open-plan office space with high-speed internet and backup power.',
    price: '$3,000/month',
    location: 'Levy Junction, Lusaka',
    type: 'Lease',
  },
  {
    title: 'Residential Apartment',
    images: ['/assets/BackLawn.jpg', '/assets/Loo.jpg', '/assets/Back Driveway.jpg', '/assets/FrontLawn.jpg', '/assets/FrontView.jpg'],
    description: 'Oppulent modern apartment situated in Meanwood Ibex.',
    price: '$5,400',
    location: 'Meanwood Ibex, Lusaka',
    type: 'Sale',
  },
  {
    title: 'Ongoing Project',
    images: ['/assets/Ongoing Project.jpg', '/assets/Stepstones.jpg', '/assets/Backyard.jpg', '/assets/Lounge.jpg', '/assets/House Plan.jpg'],
    description: 'Newly built ultramodern apartment, still under construction.',
    price: '$1,000/month',
    location: 'Ibex Hill, Lusaka',
    type: 'Rent',
  },
];

const ProjectsPage = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>All Projects | Century24 Estates</title>
        <meta name="description" content="Browse all real estate projects in Lusaka." />
        <meta name="keywords" content="Lusaka real estate, Century24 Estates, property listings, Zambia homes" />
        <meta property="og:title" content="All Projects | Century24 Estates" />
        <meta property="og:description" content="Explore our latest real estate developments in Lusaka." />
        <meta property="og:url" content="https://century24.netlify.app/projects" />
      </Helmet>

      <section css={pageWrapper(theme)}>
        <Link to="/" css={backLink}>← Back to Home</Link>
        <h2 className='oswald' css={heading}>All Projects</h2>
        <div css={grid}>
          {listings.map((project, i) => (
            <motion.div
              key={i}
              css={card(theme)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <ImageSwiper images={project.images} title={project.title} />
              <h3 css={title(theme)}>{project.title}</h3>
              <p css={description}>{project.description}</p>
              <div css={meta}>
                <span><strong>Location:</strong> {project.location}</span>
                <span className='oswald' css={price}><strong>{project.price}</strong></span>
                <span css={typeStyles}><strong>{project.type}</strong></span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
};

const ImageSwiper = ({ images, title }) => {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const isMobile = () => window.innerWidth < 768;

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  const handleTouchStart = e => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = e => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 50) prevImage();
    else if (deltaX < -50) nextImage();
  };

  return (

    <div css={swiper} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div css={imageWrapper}>
        <div css={imageStack}>
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`${title} ${index + 1}`}
              css={image}
              loading="lazy"
              initial={isMobile() ? { opacity: 0, x: 20 } : false}
              animate={isMobile() ? { opacity: 1, x: 0 } : false}
              exit={isMobile() ? { opacity: 0, x: -20 } : false}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            />
          </AnimatePresence>
        </div>
        <button onClick={prevImage} css={navButton}>‹</button>
        <button onClick={nextImage} css={navButton}>›</button>
      </div>

      <div css={indicatorWrapper}>
        {images.map((_, i) => (
          <span key={i} css={indicator(i === index)} />
        ))}
      </div>
    </div>
  );
};

const pageWrapper = theme => css`
  padding: ${spacing.lg};
  background: ${theme.background};
  color: ${theme.text};
`;

const imageWrapper = css`
  position: relative;
  width: 100%;
  height: 340px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: ${breakpoints.md}) {
    height: 260px;
  }
`;


const backLink = css`
  display: inline-block;
  margin-bottom: ${spacing.md};
  font-size: 0.95rem;
  color: #03cbda;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const grid = css`
  column-count: 3;
  column-gap: ${spacing.xl};

  @media (max-width: ${breakpoints.lg}) {
    column-count: 2;
  }

  @media (max-width: ${breakpoints.md}) {
    column-count: 1;
  }
`;


const card = theme => css`
  break-inside: avoid;
  margin-bottom: ${spacing.xl};
  background: ${theme.card};
  border-radius: 10px;
  padding: ${spacing.md};
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);

  @media (max-width: ${breakpoints.md}) {
    height: auto;
  }
`;

const swiper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${spacing.sm};
`;


const navButton = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.2);
  color: #ffffffff;
  border: none;
  font-size: 1.9rem;
  padding: 0.9rem;
  cursor: pointer;
  border-radius: 5px;
  z-index: 2;

  &:first-of-type {
    left: 12px;
  }

  &:last-of-type {
    right: 12px;
  }

  &:hover {
    background: #75757575;
    color: #000;
  }

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

const imageStack = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

const image = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: ${breakpoints.sm}) {
    transform: translateX(0);
    opacity: 1;
  }
`;

const indicatorWrapper = css`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 0.6rem;
`;

const indicator = active => css`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${active ? '#03cbda' : '#ccc'};
  transition: background 0.3s ease;
`;

const heading = css`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: ${spacing.lg};

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

const title = theme => css`
  font-size: 1.4rem;
  color: ${theme.primary};
  margin-bottom: 0.5rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.2rem;
  }
`;

const description = css`
  font-size: 1rem;
  margin-bottom: ${spacing.sm};

  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.95rem;
  }
`;

const meta = css`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.95rem;
`;

const price = css`
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: .5rem 0;
  color: #7f9790ff;
`;

const typeStyles = css`
  background: #e0f0ff;
  color: #0077cc;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  max-width: 50px;
`;

export default ProjectsPage;