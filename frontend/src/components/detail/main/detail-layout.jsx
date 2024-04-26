import React from 'react';

import { useInView } from 'react-intersection-observer';

import propTypes from 'prop-types';
import HandleBackButton from '../../button/handle-back-button';

function DetailLayout({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="flex h-screen" ref={ref}>
      <div className={`relative flex-grow ${inView ? 'animate-slidein' : ''}`}>
        <HandleBackButton path="list" />
        {children}
      </div>
    </div>
  );
}

DetailLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default DetailLayout;
