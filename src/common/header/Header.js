import React, { Component } from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg';

export default class header extends Component {
    render() {
        return (
            <div className="header">
                <img src={Logo} className="App-logo" alt="logo"  />
            </div>
        )
    }
}
