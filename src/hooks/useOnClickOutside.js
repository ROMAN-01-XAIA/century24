import { useEffect } from 'react';

/**
 * Detects clicks outside the given ref and triggers the callback.
 * @param {React.RefObject} ref - The element to monitor
 * @param {Function} callback - Function to call on outside click
 **/

const useOnClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, callback]);
};

export default useOnClickOutside;
