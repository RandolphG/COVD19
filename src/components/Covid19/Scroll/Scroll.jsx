import * as React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getCountries, getFlags } from '../../../store';
import { ErrorBoundary } from '../../ErrorBoundary';
import style from './style';

const height = 45;
const padding = 10;
const size = 550;

/**
 * table & list view of covid api data
 * @returns {JSX.Element}
 * @constructor
 */
const Scroll = () => {
  const countries = useSelector(getCountries);
  const scrollY = useMotionValue(0);
  const flags = useSelector(getFlags);

  const getHeight = items => {
    const totalHeight = items.length * height;
    const totalPadding = (items.length - 1) * padding;
    return totalHeight + totalPadding;
  };

  const width = useTransform(
    scrollY,
    [0, -getHeight(countries) + size],
    ['calc(0% - 0px)', 'calc(100% - 40px)']
  );

  const Header = () => (
    <style.Header>
      <span>Country </span> <span>Recovered</span> <span>Deaths</span>
      <span>Confirmed</span>
    </style.Header>
  );

  const Stats = ({ TotalDeaths, TotalConfirmed, TotalRecovered }) => (
    <style.Stats>
      <span style={{ marginRight: '2%', width: '15%' }}>{TotalRecovered || 0}</span>
      <span style={{ marginRight: '2%', width: '15%' }}>{TotalDeaths || 0}</span>
      <span style={{ marginRight: '2%', width: '15%' }}> {TotalConfirmed || 0}</span>
    </style.Stats>
  );

  const CountryInfo = ({ CountryCode, Country, index }) => {
    const currentFlag = flags && flags[index] && flags[index].flag;
    const singleFlag = flags.filter(C => C.flag === flags[index]);
    console.log(`CountryCode, Country, index -----> `, CountryCode, Country, index);
    return (
      <>
        <span style={{ marginRight: '16px' }}> {CountryCode}</span>
        <span style={{ marginRight: '16px' }}>
          {/*<style.Flag src={flags[index-1].flag} alt={`flags${index}`} />*/}
        </span>
        <span style={{ marginRight: '16px' }}>{Country}</span>{' '}
      </>
    );
  };

  // const single = countries.filter(C => C.Country === 'Uzbekistan');
  return (
    <ErrorBoundary>
      <style.Border whileTap={{ cursor: 'grabbing' }}>
        <Header />
        <style.Table>
          <motion.div
            style={{
              width: 600,
              height: getHeight(countries),
              y: scrollY,
            }}
            drag="y"
            dragConstraints={{
              top: -getHeight(countries) + size,
              bottom: 0,
            }}
          >
            {countries.map(
              ({ CountryCode, Country, TotalDeaths, TotalConfirmed, TotalRecovered }, index) => {
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
                    <style.Row>
                      <CountryInfo Country={Country} CountryCode={CountryCode} index={index} />
                      <Stats
                        TotalDeaths={TotalDeaths}
                        TotalConfirmed={TotalConfirmed}
                        TotalRecovered={TotalRecovered}
                      />
                    </style.Row>
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </style.Table>
        <style.ProgressBar width={width} />
      </style.Border>
    </ErrorBoundary>
  );
};

export default Scroll;
