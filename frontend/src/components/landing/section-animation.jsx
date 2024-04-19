import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function SectionAnime({ children }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 250 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}

SectionAnime.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionAnime;
