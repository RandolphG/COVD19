import * as React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getCountries, getFlags } from '../../../store';
import { ErrorBoundary } from '../../ErrorBoundary';
import style from './style';

const height = 45;
const padding = 10;
const size = 550;

const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};
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
      <span style={{ left: '4vw' }}>Country </span>
      <span
        style={{
          width: '27vw',
          fontSize: '15px',
          fontWeight: 400,
          display: 'flex',
          justifyContent: 'space-between',
          background: 'blue',
        }}
      >
        <span>Recovered</span> <span>Deaths</span>
        <span>Confirmed</span>
      </span>
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

    return (
      <div
        style={{
          background: 'black',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ background: 'orange', display: 'flex', flexDirection: 'row', width: '100%' }}>
          <span style={{ marginRight: '16px', background: 'cadetblue' }}> {CountryCode}</span>
          <span
            style={{
              width: '10vw',
              background: 'mediumpurple',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <style.Flag src={currentFlag} alt={`flag-${Country}`} />
            <span
              style={{
                display: 'inline',
                background: 'coral',
                marginLeft: '16px',
                whiteSpace: 'nowrap',
              }}
            >
              {Country}
            </span>
          </span>
        </div>
      </div>
    );
  };

  // const single = countries.filter(C => C.Country === 'Uzbekistan');
  return (
    <ErrorBoundary>
      <style.Border {...AnimationSettings} whileTap={{ cursor: 'grabbing' }}>
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
