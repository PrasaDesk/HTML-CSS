import React, { Component } from 'react';
import { connect } from 'react-redux';
import AcceptEmail from './accept_email';
import Otp from './otp';
import SetNewPassword from './setnew_password';
import { Grid } from '@material-ui/core';


class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            otp: null,
            password: null,
            col: 12
        }
        this.getEmail = this.getEmail.bind(this);
        this.getOtp = this.getOtp.bind(this);
    }

    getEmail = (Email) => {
        if (this.state.col === 12) {
            this.setState({ email: Email, col: 6 })
        }
    }

    getOtp = (otp) => {
        this.setState({ otp: otp, col: 4 })
    }

    render() {

        return (
            <div className="App-Center">
                <div>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={this.state.col} className="inner_box">
                            <AcceptEmail GetEmail={this.getEmail} />
                        </Grid>

                        {this.state.email ?
                            <Grid item sm={12} md={this.state.col} className="inner_box">
                                <Otp Email={this.state.email} GetOTP={this.getOtp} />
                            </Grid> : null}

                        {this.state.otp ?
                            <Grid item sm={12} md={this.state.col} className="inner_box">
                                <SetNewPassword Email={this.state.email}
                                    OTP={this.state.otp} />
                            </Grid> : null}
                    </Grid>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        emailData: state.forgetReducer
    };
}

export default connect(
    mapStateToProps,
)(ForgetPassword);