import { useState } from 'react';

const flagURL = `https://corona.lmao.ninja/v2/countries`;
const baseURL = `https://api.covid19api.com/`;
const summaryURL = `summary`;

/**
 * fetch country summary data
 * @returns {Promise<*>}
 */
export const fetchApi = async () => {
  try {
    const data = await fetch(`${baseURL}${summaryURL}`).then(res => res.json());

    const ttl = 3.6e6;
    localStorage.setItem('api-data', JSON.stringify(data));
    localStorage.setItem('date', JSON.stringify(data.Date));
    localStorage.setItem('global-data', JSON.stringify(data.Global));
    localStorage.setItem('countries', JSON.stringify(data.Countries));
    localStorage.setItem('number-of-countries', JSON.stringify(data.Countries.length));
    localStorage.setItem('api-expiration', (Date.now() + ttl).toString());

    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * fetch flag data
 * @returns {Promise<*>}
 */
export const getFlags = async () => {
  const countryCodes = [];

  try {
    const flagData = await fetch(flagURL).then(res => res.json());
    const data = await fetch(`${baseURL}${summaryURL}`).then(res => res.json());
    console.log(`data.Countries.length`, data.Countries.length);

    if (data) {
      for (let i = 0; i < data.Countries.length; i++) {
        countryCodes.push({ iso2: data.Countries[i].CountryCode });
      }
    }

    /**
     * generate the launch calendar data structure
     */
    const flags = [...flagData].reduce((flagArray, launchData) => {
      const country = launchData.country;
      const flag = launchData.countryInfo.flag;
      const iso2 = launchData.countryInfo.iso2;
      const countryInfo = { country, flag, iso2 };

      if (country) {
        flagArray.push(countryInfo);
      }

      return flagArray;
    }, []);

    const intersection = countryCodes
      .map(x => {
        const item = flags.find(item => item.iso2 === x.iso2);
        if (item) {
          return item;
        }
      })
      .filter(item => item !== undefined);

    /*
    let difference = countryCodes
      .map(x => {
        const item = flags.find(item => item.iso2 === x.iso2);
        if (item) {
          return item;
        }
      })
      .filter(x => !flags.includes(x));

    console.log(`difference`, difference);
    console.log(`difference.length`, difference.length);
*/

    localStorage.setItem('filtered-flags', JSON.stringify(intersection));
    localStorage.setItem('flags', JSON.stringify(flags));
    localStorage.setItem('raw-flag-data', JSON.stringify(flagData));

    return intersection;
  } catch (error) {
    console.log(error);
  }
};
/*

/!**
 * match flags with iso2
 *!/
export const getMatchFlags = () => {
  const cachedCodes = localStorage.getItem('country-code');
  const cachedFlags = localStorage.getItem('flags');

  const countryCodes = cachedCodes && JSON.parse(cachedCodes);
  const flags = cachedFlags && JSON.parse(cachedFlags);

  const intersection = countryCodes
    .map(x => {
      const item = flags.find(item => item.iso2 === x.iso2);
      if (item) {
        return item;
      }
    })
    .filter(item => item !== undefined);

  return intersection;
};
*/
