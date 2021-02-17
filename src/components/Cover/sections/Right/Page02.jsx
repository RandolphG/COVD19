import React, { Fragment } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import style from './style';
import { ErrorBoundary } from '../../../ErrorBoundary';

/**
 * intro page #02
 * @param offset
 * @param caption
 * @param first
 * @param second
 * @returns {JSX.Element}
 * @constructor
 */
const Page02 = ({ offset, caption, first, second }) => (
  <ErrorBoundary>
    <ParallaxLayer offset={offset} speed={0.2}>
      <style.SlopeBegin />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={-0.2}>
      <style.SlopeEnd />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.3}>
      <style.Numbers>
        <span>0{offset + 1}</span>
      </style.Numbers>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.4}>
      <style.Header>
        <style.Description>
          <style.Title>{caption}</style.Title>
          <style.Stripe />
          <style.Text>
            <style.TextA>{first}</style.TextA>
            <style.TextA>{second}</style.TextA>
          </style.Text>
        </style.Description>
      </style.Header>
    </ParallaxLayer>
  </ErrorBoundary>
);

export default Page02;
