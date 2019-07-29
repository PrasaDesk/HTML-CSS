import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Button, TextField, Grid } from '@material-ui/core';
import Logo from '../UI/logo/logo';
import { request_login_data } from '../../modules/actions/index';
import { validateEmail, validatePassword } from '../../utils/validations';

import './login.css'

// This is login component used to Logged in into the system.
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            errEmail: null,
            errPassword: null
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.forgetPassword = this.forgetPassword.bind(this);
    }

    handleLogin() {
        if (!validateEmail(this.state.email)) {
            this.setState({ errEmail: "please, provide valid email" })
            return
        }

        if (!validatePassword(this.state.password)) {
            this.setState({ errPassword: "Password length should be more then 5" })
            return
        }
        let payload = {
            email: this.state.email,
            password: this.state.password,
            history: this.props
        }

        this.props.request_login_data(payload);
    }

    componentDidMount() {
        if (localStorage.getItem("refresh_token") && localStorage.getItem("access_token")) {
            this.props.history.push("/dashboard");
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errEmail: null,
            errPassword: null
        })
        document.getElementById("loginError").textContent = null
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleLogin();
        }
    }

    forgetPassword() {
        this.props.history.push("/forget")
    }

    render() {
        return (
            <div className="LoginApp App-Center">
                <div className="LoginBox">

                    <div className="LoginForm">
                        <div className="logo"> <Logo /> </div>
                        <div className="errorFont" id="loginError">
                            {this.props.error ? this.props.error.error : null}
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
                                    className="textfield"
                                    onChange={this.handleChange}
                                />
                                <div className="errorFont">{this.state.errEmail}</div>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    className="textfield"
                                    onChange={this.handleChange}
                                    onKeyDown={this.handleKeyPress}
                                />
                                <div className="errorFont">{this.state.errPassword}</div>
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="btn"
                                    onClick={this.handleLogin}>
                                    Login
                                </Button>

                            </Grid>

                        </Grid>
                    </div>
                    <div className="forget">
                        <div className="FontForgetPassword" >

                            <span to="forgotpassword" onClick={this.forgetPassword}> forget password? </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    if (state.loginRegisterReducer.status === 404) {
        return {
            error: state.loginRegisterReducer.data
        }
    }
    else {
        return {
            error: null
        }
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ request_login_data }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);