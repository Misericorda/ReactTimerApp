import React from 'react';
import {NavLink} from 'react-router-dom';


class Nav extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React App</li>
            <li>
              <NavLink exact to="/" activeClassName="active">Timer</NavLink>
            </li>
            <li>
              <NavLink to="/countdown" activeClassName="active">Countdown</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Nav;