import React, { Fragment } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import s from './style';

/**
 * intro page #01
 * @param offset
 * @param caption
 * @param first
 * @param second
 * @returns {JSX.Element}
 * @constructor
 */
const Page01 = ({ offset, caption, first, second }) => (
  <Fragment>
    <ParallaxLayer offset={offset} speed={0.2}>
      <s.SlopeBegin />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={-0.2}>
      <s.SlopeEnd />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.3}>
      <s.Numbers>
        <span>0{offset + 1}</span>
      </s.Numbers>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.4}>
      <s.Header>
        <span>
          <p style={{ fontSize: 15 }}>{caption}</p>
          <s.Stripe />
          <p>{first}</p>
          <p>{second}</p>
        </span>
      </s.Header>
    </ParallaxLayer>
  </Fragment>
);

export default Page01;
