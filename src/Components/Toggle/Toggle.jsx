import React, { useContext } from 'react';
import './Toogle.css';
import { UilSun, UilMoon } from '@iconscout/react-unicons';
import { themeContext } from '../../context';

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Corrected dispatch typo
  const handleClick = () => {
    theme.dispatch({ type: 'toggle' });
  };

  return (
    <div className='toggle'>
      <UilMoon />
      <UilSun />
      <div
        className="t-button"
        onClick={handleClick}
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      ></div>
    </div>
  );
};

export default Toggle;
