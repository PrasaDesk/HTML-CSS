import React, { Component } from 'react'
import './forget_password.css';
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import { validateOTP } from '../../utils/validations';
import { request_verify_otp } from '../../modules/actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: null,
            otp_error: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        this.setState({
            otp: event.target.value,
            otp_error: null
        })
    }

    handleClick() {
        if (!validateOTP(this.state.otp)) {
            this.setState({ otp_error: "please provide valid otp" })
            return
        }
        let payload = {
            email: this.props.Email,
            OTP: this.state.otp
        }
        this.props.request_verify_otp(payload)

    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    componentDidUpdate(){
        console.clear();
    }

    render() {
        let disable = false;
        if (this.props.data) {
            if (this.props.data.data === "OTP verified") {
                this.props.GetOTP(this.state.otp)
                disable = true
            }
        }
        return (
            <div className="box">
                <div className="heading">
                    <Typography variant="h5" gutterBottom> OTP</Typography>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    OTP send to your email address
                                </Typography>
                                <Typography variant="body1">
                                    Please enter your one time password
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={this.state.otp_error ? true : (this.props.error ? true : false)}
                                    disabled={disable}
                                    variant="outlined"
                                    id="OTP"
                                    name="OTP"
                                    className="textField"
                                    label="One Time Password"
                                    onChange={this.handleChange}
                                    onKeyDown={this.handleKeyPress}
                                    helperText={this.state.otp_error ? this.state.otp_error :
                                        (this.props.error ? this.props.error.error : false)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" disabled={disable}
                            className="btn"
                            onClick={this.handleClick}>Submit OTP</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if (state.forgetReducer.status === 400) {
        return {
            error: state.forgetReducer.data
        }
    }
    else {
        return {
            data: state.forgetReducer,
            error: null
        }
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ request_verify_otp }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Otp);