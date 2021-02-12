import React from 'react';
import { useTilt } from '../useTilt';
import './style.css';
import s from './style';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentSlideIndex,
  getFlags,
  getNumberOfCountries,
  getSlideIndex,
  isModalShown,
} from '../../../store';
import { toggleModal } from '../../../store/actions';
const image =
  'https://singularityhub.com/wp-content/uploads/2020/06/SpaceX-offshore-launchpads-Starship.jpg';

/**
 * return days for carousel
 * @param offset
 * @param launches
 * @param weekday
 * @returns {JSX.Element}
 * @constructor
 */
const Countries = ({
  currentIndex,
  country,
  total,
  newrecovered,
  totaldeaths,
  deaths,
  newconfirmed,
  totalrecovered,
}) => {
  // const numberOfCountries = useSelector(getNumberOfCountries);
  const slideIndex = useSelector(getSlideIndex);
  let offset = slideIndex - currentIndex;
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  const index = useSelector(getCurrentSlideIndex);
  const dispatch = useDispatch();
  const isModalHidden = useSelector(isModalShown);

  const flags = useSelector(getFlags);

  const toggle = () => {
    dispatch(toggleModal(!isModalHidden));
  };

  return (
    <div
      ref={ref}
      className={'slide'}
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          background: 'black',
        }}
      />
      <div
        className=" slideContent "
        style={{
          background: 'linear-gradient(0deg, black, #444444)',
        }}
      >
        <div className="slideContentInner">
          <s.DateInfo>
            <div style={{ marginBottom: '16px', fontSize: '35px' }}>{country}</div>
            <s.TextInfo>new confirmed {newconfirmed}</s.TextInfo>
            <s.TextInfo>total confirmed {total}</s.TextInfo>
            <s.TextInfo>new deaths {deaths}</s.TextInfo>
            <s.TextInfo>new recovered {newrecovered}</s.TextInfo>
            <s.TextInfo>total deaths {totaldeaths}</s.TextInfo>
            <s.TextInfo>total recovered {totalrecovered}</s.TextInfo>
            <img src={`${flags[index - 1].flag}`} alt={'flags'} />
          </s.DateInfo>
          <s.AgencySection>
            <s.AgencyTitle onClick={toggle}>INFO</s.AgencyTitle>
          </s.AgencySection>
        </div>
      </div>
    </div>
  );
};

export default Countries;
