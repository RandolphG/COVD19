import * as React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getCountries } from '../../../store';
import { ErrorBoundary } from '../../ErrorBoundary';
import styled from 'styled-components';
import { Frame } from 'framer';

const height = 45;
const padding = 10;
const size = 550;

const Row = styled.div`
  &:last-child {
    background: olive;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-grow: 1;
  }
`;

export function Scroll() {
  const country = useSelector(getCountries);
  const scrollY = useMotionValue(0);

  const width = useTransform(
    scrollY,
    [0, -getHeight(country) + size],
    ['calc(0% - 0px)', 'calc(100% - 40px)']
  );

  return (
    <>
      <ErrorBoundary>
        <div
          style={{
            background: 'burlywood',
            fontSize: '20px',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            height: '30px',
            width: '600px',
            paddingLeft: '32px',
            paddingRight: '32px',
            zIndex: 400,
            top: '15%',
            textTransform: 'uppercase',
          }}
        >
          <span>Country </span> <span>Recovered</span> <span>Deaths</span> <span>Confirmed</span>
        </div>
        <motion.div
          style={{
            zIndex: '900',
            width: 600,
            height: 275,
            borderRadius: 10,
            overflow: 'hidden',
            position: 'relative',
            transform: 'translateZ(0)',
            cursor: 'grab',
          }}
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            style={{
              width: 600,
              height: getHeight(country),
              y: scrollY,
            }}
            drag="y"
            dragConstraints={{
              top: -getHeight(country) + size,
              bottom: 0,
            }}
          >
            {country.map(
              (
                { CountryCode, Country, Slug, TotalDeaths, TotalConfirmed, TotalRecovered },
                index
              ) => {
                return (
                  <motion.div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      fontSize: '16px',
                      color: 'black',
                      width: 600,
                      height: height,
                      borderRadius: '4px',
                      backgroundColor: '#fff',
                      position: 'absolute',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      top: (height + padding) * index,
                    }}
                    key={index}
                  >
                    <Row>
                      <span style={{ marginRight: '16px' }}> {CountryCode}</span>
                      <span style={{ marginRight: '16px' }}>FLAG</span>
                      <span style={{ marginRight: '16px' }}>{Country}</span>
                      <div
                        style={{
                          background: 'blueviolet',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <span style={{ marginRight: '16px' }}>{TotalRecovered}</span>
                        <span style={{ marginRight: '16px' }}>{TotalDeaths}</span>
                        <span style={{ marginRight: '16px' }}> {TotalConfirmed}</span>
                      </div>
                    </Row>
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            zIndex: 500,
            width: width,
            height: '12px',
            borderRadius: '8px',
            background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
            position: 'absolute',
            border: 'solid black 2px',
            bottom: 20,
            left: 20,
          }}
        />
      </ErrorBoundary>
    </>
  );
}

function getHeight(items) {
  const totalHeight = items.length * height;
  const totalPadding = (items.length - 1) * padding;
  return totalHeight + totalPadding;
}

export default Scroll;
