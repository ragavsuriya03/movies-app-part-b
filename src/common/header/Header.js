import React, { Component } from 'react';
import './Header.css';
import Logo from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";


class Header extends Component {

    
    render() {
        console.log(this.props);
        return (
            <div>
                <header className="header">
                    <img src={Logo} className="App-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default">Login</Button>
                    </div>
                    {this.props.showBookShowButton && this.props.isLoggedin ? (
                        <div className="booknow-button">
                            <Link to={"/bookshow/" + this.props.id} style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="primary" >
                                    Book Show
                                </Button>
                            </Link>
                        </div>
                    ) : this.props.showBookShowButton ? (
                        <div className="booknow-button">
                            <Button variant="contained" color="primary">
                                Book Show
                            </Button>
                        </div>) : ("")}
                </header>
            </div>
        );
    }
}
export default Header;