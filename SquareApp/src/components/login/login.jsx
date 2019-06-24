import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { validateEmail, validatePassword } from '../../utils/validations'
import Logo from '../logo/logo'
import postLoginData from '../../modules/actions/index'
import axios from 'axios';

import './login.css'

// function mapStateToProps(state) {
//     return {

//     };
// }

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            errEmail: null,
            password: null,
            errPassword: null
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }


    handleEmailChange(event) {
        this.setState({ email: event.target.value, errEmail: null })
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value, errPassword: null })
    }


    handleSignIn = () => {

        if (!validateEmail(this.state.email)) {
            this.setState({ errEmail: "please, provide valid email" })
            return
        }

        if (!validatePassword(this.state.password)) {
            this.setState({ errPassword: "Password length should be more then 5" })
            return
        }

        let data = {
            email: this.state.email,
            password: this.state.password
        }
        console.log("data: ", data)

        axios.post('http://localhost:5050' + '/login', data)
            .then(res => {
                const quest = res;
                console.log(quest.data)
            }).catch((e) => {
                console.log(e)
            });

    }





    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSignIn();
        }
    }

    render() {
        return (
            <div className="LoginApp LoginApp-Center">
                <div className="LoginBox">

                    <div className="LoginForm">
                        <div className="logo"> <Logo /> </div>
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
                                    onChange={this.handleEmailChange}
                                />
                                <div className="errorFont">{this.state.errEmail}</div>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    className="textfield"
                                    onChange={this.handlePasswordChange}
                                    onKeyPress={this.handleKeyPress}
                                />
                                <div className="errorFont">{this.state.errPassword}</div>
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSignIn}
                                    className="btn">
                                    Login
                                </Button>
                            </Grid>

                        </Grid>
                    </div>
                    <div className="forget">
                        <div className="FontForgetPassword">forget password?</div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default connect(
//     mapStateToProps,
// )(login);

export default Login;