import React from 'react';
import { Link } from 'react-router-dom';
import Linked from '../assets/bi_linkedin.svg';
import Github from '../assets/github.svg';
import stackoverflow from '../assets/stackoverflow.svg';

const Footer = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        zIndex: 9999,
      }}
    >
      {/* Replace the "to" prop values with your desired routes */}
      <Link to="/route1">
        <img src={Linked} alt="Icon 1" style={{ width: '50px', height: '50px', margin: '0 10px' }} />
      </Link>
      <Link to="/route2">
        <img src={Github} alt="Icon 2" style={{ width: '50px', height: '50px', margin: '0 10px' }} />
      </Link>
      <Link to="/route3">
        <img src={stackoverflow} alt="Icon 3" style={{ width: '50px', height: '50px', margin: '0 10px' }} />
      </Link>
    </div>
  );
};

export default Footer;
