import React from 'react';

import './styles.css';

const Launcher = () => (
  <div className="launcher-body">
    <div className="logo-container">
      <img alt="logo" src={process.env.PUBLIC_URL + "/img/logo.svg"} />
      <div className="logo-text">
        <h4>Loading ...</h4>
        <p className="text-muted">We're testing your patience</p>
      </div>
    </div>
  </div>
);

export default Launcher;
