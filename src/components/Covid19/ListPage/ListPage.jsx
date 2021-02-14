import React, { useState } from 'react';
import { Frame, Page, transform } from 'framer';
import './style.css';
import { Scroll } from '../Scroll';

const pages = [1, 2, 3, 4, 5, 6];
const indicatorSize = 10;
const indicatorPadding = 10;
const indicatorWidth = pages.length * indicatorSize;
const indicatorPaddingTotal = (pages.length - 1) * indicatorPadding;
const indicatorWidthTotal = indicatorWidth + indicatorPaddingTotal;
const indicatorAlpha = 0.3;

function ListPage() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="App">
      <Page
        width={550}
        height={350}
        radius={20}
        gap={0}
        effect={info => {
          const convertRotateY = transform([-1, 0, 1], [-135, 0, 135]);
          const rotateY = convertRotateY(info.normalizedOffset);
          const convertScale = transform([-1, 0, 1], [0.5, 1, 0.5]);
          const scale = convertScale(info.normalizedOffset);
          const convertOpacity = transform([-1, 0, 1], [0, 1, 0]);
          const opacity = convertOpacity(info.normalizedOffset);

          return { opacity, scale, rotateY };
        }}
        onChangePage={current => {
          setCurrent(current);
        }}
      >
        {pages.map(index => {
          return (
            <Frame
              key={index}
              size={150}
              radius={20}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <Scroll />
            </Frame>
          );
        })}
      </Page>

      {pages.map(index => {
        return (
          <Frame
            key={index}
            size={indicatorSize}
            top={`calc(50% + 220px)`}
            left={`calc(50% + ${index - 1} * ${indicatorSize + indicatorPadding}px) `}
            x={-indicatorWidthTotal / 2}
            radius={20}
            background="#f1f"
            opacity={indicatorAlpha}
            animate={{ opacity: current === index - 1 ? 1 : indicatorAlpha }}
          />
        );
      })}
    </div>
  );
}

export default ListPage;
