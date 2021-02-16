const flagURL = `https://corona.lmao.ninja/v2/countries`;
const baseURL = `https://api.covid19api.com/`;
const summaryURL = `summary`;
const ttl = 3.6e6;

const countryCodes = [];

/**
 * set local data
 * @param data
 * @param ttl
 */
const setLocalData = (data, ttl) => {
  localStorage.setItem('date', JSON.stringify(data.Date));
  localStorage.setItem('api-data', JSON.stringify(data));
  localStorage.setItem('countries', JSON.stringify(data.Countries));
  localStorage.setItem('number-of-countries', JSON.stringify(data.Countries.length));
  localStorage.setItem('api-expiration', (Date.now() + ttl).toString());
};

/**
 * map flags to array
 * @param data
 */
const mapFlags = data => {
  if (data) {
    data.Countries.forEach((country, index) => {
      countryCodes.push({ iso2: data.Countries[index].CountryCode });
    });
  }
};

/**
 * create flag img array
 * @param flagData
 * @returns {*}
 */
const getFlags = flagData => {
  return [...flagData].reduce((flagArray, launchData) => {
    const country = launchData.country;
    const flag = launchData.countryInfo.flag;
    const iso2 = launchData.countryInfo.iso2;
    const countryInfo = { country, flag, iso2 };

    if (country) {
      flagArray.push(countryInfo);
    }

    return flagArray;
  }, []);
};

/**
 * fetch country & flag data
 * @returns {Promise<*>}
 */
export const api = {
  fetchCountries: async () => {
    try {
      const request = await fetch(`${baseURL}${summaryURL}`).then(res => res.json());
      setLocalData(request, ttl);
      return request;
    } catch (error) {
      console.log(error);
    }
  },
  fetchFlags: async () => {
    try {
      const flagData = await fetch(flagURL).then(res => res.json());
      const data = await fetch(`${baseURL}${summaryURL}`).then(res => res.json());

      mapFlags(data);

      const flags = getFlags(flagData);

      const intersection = countryCodes
        .map(x => {
          const item = flags.find(item => item.iso2 === x.iso2);
          if (item) {
            return item;
          }
        })
        .filter(item => item !== undefined);

      localStorage.setItem('filtered-flags', JSON.stringify(intersection));
      localStorage.setItem('flags', JSON.stringify(flags));
      localStorage.setItem('raw-flag-data', JSON.stringify(flagData));

      return intersection;
    } catch (error) {
      console.log(error);
    }
  },
};
