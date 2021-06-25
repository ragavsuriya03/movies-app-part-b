import './Header.css';
import Logo from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";
import React, { useState } from 'react';

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};
const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: "center" }}>
            {props.children}
        </Typography>
    );
};
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const Header =(props)=> {
    const[modalIsOpen,setModel]=useState(false);
    const[value,setValue]=useState(0);
    const[usernameRequired,setUsernameRequired]=useState('dispNone');
    const[username,setUsername]=useState('');
    const[loginPasswordRequired,setLoginPasswordRequired]=useState('dispNone');
    const[loginPassword,setLoginPassword]=useState('');
    const[firstnameRequired,setFirstnameRequired]=useState('dispNone');
    const[firstname,setFristName]=useState('');
    const[lastnameRequired,setLastnameRequired]=useState('dispNone');
    const[lastname,setLastname]=useState('');
    const[emailRequired,setEmailRequired]=useState('dispNone');
    const[email,setEmail]=useState('');
    const[registerPasswordRequired,setRegisterPasswordRequired]=useState('dispNone');
    const[registerPassword,setRegisterPassword]=useState('');
    const[contactRequired,setContactRequired]=useState('dispNone');
    const[contact,setContact]=useState('');
    const[login,setLogin]=useState('dispNone');

    const openModalHandler = () => {
        setModel(true);
    };
    const closeModalHandler = () => {
        setModel( false );
    };
    const tabChangeHandler = (event, value) => {
           setValue(value );
    };
    const loginClickHandler = () => {
        username === ""
            ? setUsernameRequired("dispBlock" )
            : setUsernameRequired( "dispNone" );
        loginPassword === ""
            ? setLoginPasswordRequired( "dispBlock")
            : setLoginPasswordRequired("dispNone" );
    };

    const inputUsernameChangeHandler = (e) => {
        setUsername( e.target.value );
    };
   const inputLoginPasswordChangeHandler = (e) => {
        setLoginPassword( e.target.value );
    };
  const  registerClickHandler = () => {
            firstname === ""
            ? setFirstnameRequired( "dispBlock" )
            : setFirstnameRequired( "dispNone" );
            lastname === ""
            ? setLastnameRequired( "dispBlock" )
            : setLastnameRequired( "dispNone" );
            email === ""
            ? setEmailRequired("dispBlock" )
            : setEmailRequired( "dispNone" );
        registerPassword === ""
            ? setRegisterPasswordRequired( "dispBlock" )
            : setRegisterPasswordRequired("dispNone" );
        contact === ""
            ? setContactRequired("dispBlock" )
            : setContactRequired( "dispNone" );
        (firstname !== "" && lastname !== "" && email !== "" && registerPassword !== "" && contact !== "") ? setLogin( "dispBlock" ) : (setLogin( "dispNone" ));

    };
  const  inputFirstNameChangeHandler = (e) => {
        setFristName(  e.target.value );
    };
  const  inputLastNameChangeHandler = (e) => {
        setLastname( e.target.value );
    };
  const  inputEmailChangeHandler = (e) => {
        setEmail(  e.target.value );
    };
   const inputRegisterPasswordChangeHandler = (e) => {
        setRegisterPassword(e.target.value );
    };
   const inputContactChangeHandler = (e) => {
        setContact( e.target.value );
    };

        console.log(props);
        return (
            <div>
                <header className="header">
                    <img src={Logo} className="App-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={openModalHandler}>Login</Button>
                    </div>
                    {props.showBookShowButton && props.isLoggedin ? (
                        <div className="booknow-button">
                            <Link to={"/bookshow/" + props.id} style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="primary" >
                                    Book Show
                </Button>
                            </Link>
                        </div>
                    ) : props.showBookShowButton ? (
                        <div className="booknow-button">
                            <Button variant="contained" color="primary" onClick={openModalHandler}>
                                Book Show
                </Button>
                        </div>
                    ) : (
                                ""
                            )}
                </header>

                <Modal
                    ariaHideApp={false}
                    isOpen={modalIsOpen}
                    contentLabel="Login"
                    onRequestClose={closeModalHandler}
                    style={customStyles}
                >
                    <Tabs
                        className="tabs"
                        value={value}
                        onChange={tabChangeHandler}
                    >
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {value === 0 && (
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input
                                    id="username"
                                    type="text"
                                    username={username}
                                    onChange={inputUsernameChangeHandler}
                                />
                                <FormHelperText className={usernameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="loginPassword">Password</InputLabel>
                                <Input
                                    id="loginPassword"
                                    type="password"
                                    loginpassword={loginPassword}
                                    onChange={inputLoginPasswordChangeHandler}
                                />
                                <FormHelperText className={loginPasswordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={loginClickHandler}
                            >
                                LOGIN
              </Button>
                        </TabContainer>
                    )}
                    {value === 1 && (
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="firstname">First Name</InputLabel>
                                <Input
                                    id="firstname"
                                    type="text"
                                    firstname={firstname}
                                    onChange={inputFirstNameChangeHandler}
                                />
                                <FormHelperText className={firstnameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                                <Input
                                    id="lastname"
                                    type="text"
                                    lastname={lastname}
                                    onChange={inputLastNameChangeHandler}
                                />
                                <FormHelperText className={lastnameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    id="email"
                                    type="text"
                                    email={email}
                                    onChange={inputEmailChangeHandler}
                                />
                                <FormHelperText className={emailRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="registerPassword">Password</InputLabel>
                                <Input
                                    id="registerPassword"
                                    type="password"
                                    registerpassword={registerPassword}
                                    onChange={inputRegisterPasswordChangeHandler}
                                />
                                <FormHelperText className={registerPasswordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="contact">Contact No.</InputLabel>
                                <Input
                                    id="contact"
                                    type="text"
                                    contact={contact}
                                    onChange={inputContactChangeHandler}
                                />
                                <FormHelperText className={contactRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormHelperText className={login} style={{ textAlign: 'center', marginBottom: '1%', justifyContent: 'center' }}>
                                <span >Registration Successful. Please Login!</span>
                            </FormHelperText>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={registerClickHandler}
                            >
                                REGISTER
              </Button>
                        </TabContainer>
                    )}
                </Modal>
            </div>
        );
}
export default Header;