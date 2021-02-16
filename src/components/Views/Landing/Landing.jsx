import React, { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router';
import { Parallax } from 'react-spring/renderprops-addons';
import { Page01 } from './Page01';
import { Page02 } from './Page02';
import './style.css';

import { useHistory } from 'react-router-dom';

const Landing = () => {
  let parallax = useRef(null);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const onLoad = () => {
    console.log(`REDIRECTED!!!`);
    history.push('/CAROUSEL');
    setIsLoading(true);
  };

  useEffect(() => {
    setTimeout(() => {
      parallax.scrollTo(1);
    }, 2500);

    const timer = setTimeout(() => {
      onLoad();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Redirect to="/CAROUSEL" />}(
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
        />
        <Page02 offset={1} caption="second stats" first="table & list" second="framer motion" />
      </Parallax>
      )}
    </>
  );
};

export default Landing;
