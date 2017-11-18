import React from 'react';
import {Link, NavLink} from 'react-router-dom';


class Nav extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li>
                            <NavLink exact to="/" activeClassName="active">Timer</NavLink>
                        </li>
                        <li>
                            <NavLink to="/countdown" activeClassName="active">Countdown</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by <a href="#">Dmitry Oleinik</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
module.exports = Nav;