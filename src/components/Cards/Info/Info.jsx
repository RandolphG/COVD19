import React from 'react';
import './style.css';
import style from './style';
import { useSelector } from 'react-redux';
import { getFlags } from '../../../store';
/**
 * information
 * @param currentIndex
 * @param country
 * @param total
 * @param totaldeaths
 * @param totalrecovered
 * @returns {JSX.Element}
 * @constructor
 */
const Info = ({ currentIndex, country, deaths, confirmed, recovered, toggle }) => {
  const flags = useSelector(getFlags);
  const currentFlag = flags && flags[currentIndex] && flags[currentIndex].flag;

  return (
    <div>
      <style.Card>
        <style.Header url={currentFlag}>
          <style.Title>{country}</style.Title>
          <style.Button onClick={toggle}>Details</style.Button>
        </style.Header>
        <style.Content>
          <style.Details>
            <style.Description>Deaths</style.Description>
            <style.Amount>{deaths}</style.Amount>
          </style.Details>
          <style.Details>
            <style.Description>Confirmed</style.Description>
            <style.Amount>{confirmed}</style.Amount>
          </style.Details>
          <style.Details>
            <style.Description>Recovered</style.Description>
            <style.Amount>{recovered}</style.Amount>
          </style.Details>
        </style.Content>
      </style.Card>
    </div>
  );
};

export default Info;
