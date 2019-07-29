import React, { Component } from 'react'
import './forget_password.css';
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import { checkEqualPassword } from '../../utils/validations';
import { request_update_forget_password } from '../../modules/actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { createBrowserHistory } from 'history';

class SetNewPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_password: null,
            retype_password: null,
            prassword_error: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            password_error: null
        })
    }

    handleClick() {
        if (!checkEqualPassword(this.state.new_password, this.state.retype_password)) {
            this.setState({ password_error: "Password not match" })
            return
        }
        let his = createBrowserHistory()
        let payload = {
            email: this.props.Email,
            OTP: this.props.OTP,
            password: this.state.retype_password,
            history: his
        }
        this.props.request_update_forget_password(payload)

    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div className="box">
                <div className="heading">
                    <Typography variant="h5" gutterBottom>New Password</Typography>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    id="new_password"
                                    name="new_password"
                                    type="password"
                                    label="New Password"
                                    className="textField"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={this.state.password_error ? true : false}
                                    variant="outlined"
                                    id="retype_password"
                                    name="retype_password"
                                    type="password"
                                    className="textField"
                                    label="Re-Type Password"
                                    onChange={this.handleChange}
                                    onKeyDown={this.handleKeyPress}
                                    helperText={this.state.password_error ? this.state.password_error : null}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary"
                            className="btn"
                            onClick={this.handleClick}>Submit Email</Button>
                    </Grid>
                </Grid>
            </div >
        )
    }
}

const mapStateToProps = (state) => {

    if (state.forgetReducer.status === 404) {
        return {
            error: state.forgetReducer
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
    return bindActionCreators({ request_update_forget_password }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SetNewPassword);