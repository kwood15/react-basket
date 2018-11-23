import React from 'react';

const NavBar = ({ totalCounters }) => (
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <span className="badge badge-pill badge-secondary">
        {totalCounters ? totalCounters : null}
      </span>
    </a>
  </nav>
);

export default NavBar;
