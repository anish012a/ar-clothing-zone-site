/**
 * Animation Variants Hook
 * Location: hooks/useAnimationVariants.js
 * 
 * Custom hook to provide memoized animation variants
 * Prevents recreation of animation objects on every render
 */

import { useMemo } from 'react';

export const useAnimationVariants = () => {
  return useMemo(
    () => ({
      containerVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      },

      itemVariants: {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      },

      scaleVariants: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        },
      },

      slideFromLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6 },
        },
      },

      slideFromRight: {
        hidden: { opacity: 0, x: 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6 },
        },
      },

      fadeInUp: {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      },

      staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
          },
        },
      },
    }),
    []
  );
};

export default useAnimationVariants;
