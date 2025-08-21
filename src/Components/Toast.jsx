import { css, useTheme } from '@emotion/react';
import { motion } from 'framer-motion';

const Toast = ({ type, message }) => {
  const theme = useTheme();

  return (
    <motion.div
      css={toastStyles(theme, type)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }} // ✅ Slide out to the right
      transition={{ duration: 0.4 }}
    >
      {message}
    </motion.div>
  );
};

const toastStyles = (theme, type) => css`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${type === 'success' ? '#28a745' : '#dc3545'};
  color: ${theme.text};
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  z-index: 999;
`;

export default Toast;
