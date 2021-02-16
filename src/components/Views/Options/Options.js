import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCountries } from '../../../store';
import style from './style';
const Options = () => {
  const countries = useSelector(getCountries);
  const [filtered, setFiltered] = useState([]);

  const [input, setInput] = useState('');
  const onChange = e => {
    e.preventDefault();
    setInput(e.target.value);
    const searchedCountries = countries.filter(C => C.Country === input);
    setFiltered([...searchedCountries]);

    console.log(`searchedCountries input `, searchedCountries, input);
  };

  const NavLinks = () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1vh',
        height: '7vh',
        justifyContent: 'space-between',
      }}
    >
      <Link style={{ color: '#0099ff', textDecoration: 'none' }} to={`/SCROLL`}>
        Table
      </Link>
      <Link style={{ color: '#ff0055', textDecoration: 'none' }} to={`/CAROUSEL`}>
        Carousel
      </Link>
    </div>
  );

  return (
    <style.Border>
      <NavLinks />
      {/*
       <span>SEARCH</span>
      <span
        style={{
          fontSize: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'red',
          width: '8vw',
          overflow: 'hidden',
          margin: '10px 0',
        }}
      >
        <input
          style={{ height: '5vh' }}
          type="text"
          placeholder={'search'}
          value={input}
          onChange={e => onChange(e)}
        />
      </span>
      <span>SORT</span>*/}
    </style.Border>
  );
};
export default Options;
