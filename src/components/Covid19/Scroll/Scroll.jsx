import * as React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getCountries, getCurrentSlideIndex, getFlags, getSlideIndex } from '../../../store';
import { ErrorBoundary } from '../../ErrorBoundary';
import s from './style';

const height = 45;
const padding = 10;
const size = 550;

/**
 * table & list view of covid api data
 * @returns {JSX.Element}
 * @constructor
 */
const Scroll = () => {
  const index = useSelector(getSlideIndex);
  const country = useSelector(getCountries);
  const scrollY = useMotionValue(0);
  const flags = useSelector(getFlags);

  const getHeight = items => {
    const totalHeight = items.length * height;
    const totalPadding = (items.length - 1) * padding;
    return totalHeight + totalPadding;
  };

  const width = useTransform(
    scrollY,
    [0, -getHeight(country) + size],
    ['calc(0% - 0px)', 'calc(100% - 40px)']
  );

  const Header = () => (
    <s.Header>
      <span>Country </span> <span>Recovered</span> <span>Deaths</span>
      <span>Confirmed</span>
    </s.Header>
  );

  const Stats = ({ TotalDeaths, TotalConfirmed, TotalRecovered }) => (
    <s.Stats>
      <span style={{ marginRight: '16px', width: '15%' }}>{TotalRecovered}</span>
      <span style={{ marginRight: '16px', width: '15%' }}>{TotalDeaths}</span>
      <span style={{ marginRight: '16px', width: '15%' }}> {TotalConfirmed}</span>
    </s.Stats>
  );

  const CountryInfo = ({ CountryCode, Country, index }) => (
    <>
      <span style={{ marginRight: '16px' }}> {CountryCode}</span>
      <span style={{ marginRight: '16px' }}>
        {/*<s.Flag src={flags[index-1].flag} alt={`flags${index}`} />*/}
      </span>
      <span style={{ marginRight: '16px' }}>{Country}</span>{' '}
    </>
  );

  console.log(`FLAGS --->`, flags);

  return (
    <ErrorBoundary>
      <Header />
      <s.Border whileTap={{ cursor: 'grabbing' }}>
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
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    fontSize: '16px',
                    color: 'black',
                    width: '100%',
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
                  <s.Row>
                    <CountryInfo Country={Country} CountryCode={CountryCode} index={index} />
                    <Stats
                      TotalDeaths={TotalDeaths}
                      TotalConfirme={TotalConfirmed}
                      TotalRecovered={TotalRecovered}
                    />
                  </s.Row>
                </motion.div>
              );
            }
          )}
        </motion.div>
      </s.Border>
      <s.ProgressBar width={width} />
    </ErrorBoundary>
  );
};

export default Scroll;
