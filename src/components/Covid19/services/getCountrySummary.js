import { generateLaunchCalendarKey } from './index';

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

export const getFlags = async () => {
  try {
    const flagData = await fetch(flagURL).then(res => res.json());

    /**
     * generate the launch calendar data structure
     */
    const flags = [...flagData].reduce((flagArray, launchData) => {
      const country = launchData.country;
      const countryFlag = launchData.countryInfo.flag;
      const contryInfo = { country: country, flag: countryFlag };

      if (country) {
        flagArray.push(contryInfo);
      }

      return flagArray;
    }, []);

    localStorage.setItem('flags', JSON.stringify(flags));

    return flags;
  } catch (error) {
    console.log(error);
  }
};
