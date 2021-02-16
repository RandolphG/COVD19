import React, { useRef } from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import { Page01 } from './Page01';
import { Page02 } from './Page02';
import './style.css';

const Sections = () => {
  let parallax = useRef();
  const scroll = to => parallax.scrollTo(to);

  setTimeout(() => {
    parallax.scrollTo(1);
  }, 2500);

  return (
    <Parallax
      className="container"
      ref={ref => (parallax = ref)}
      pages={2}
      horizontal
      scrolling={false}
    >
      <Page01
        offset={0}
        gradient="pink"
        caption="Covid 19"
        first="electron"
        second="framer-motion"
        onClick={() => scroll(1)}
      />
      <Page02
        offset={1}
        caption="second stats"
        first="table & list"
        second="framer motion"
        onClick={() => scroll(0)}
      />
    </Parallax>
  );
};

export default Sections;
