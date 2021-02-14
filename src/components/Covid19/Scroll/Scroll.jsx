import * as React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getCountries } from '../../../store';
import { ErrorBoundary } from '../../ErrorBoundary';

const height = 40;
const padding = 10;
const size = 550;

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
        <motion.div
          style={{
            width: 500,
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
              width: 650,
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
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '16px',
                      color: 'black',
                      width: 500,
                      height: height,
                      borderRadius: 5,
                      backgroundColor: '#fff',
                      position: 'absolute',
                      top: (height + padding) * index,
                    }}
                    key={index}
                  >
                    {CountryCode} {Country} {Slug} {TotalRecovered} {TotalDeaths} {TotalConfirmed}
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            width: width,
            height: 6,
            borderRadius: 3,
            backgroundColor: '#fff',
            position: 'absolute',
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
