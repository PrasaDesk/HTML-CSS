import React, { Component } from 'react';
import './forget_password.css';
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import { validateEmail } from '../../utils/validations';
import { request_check_email } from '../../modules/actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class AcceptEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            email_error: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        this.setState({
            email: event.target.value,
            email_error: null
        })
    }

    handleClick() {
        if (!validateEmail(this.state.email)) {
            this.setState({ email_error: "please, provide valid email" })
            return
        }
        let payload = { email: this.state.email }

        this.props.request_check_email(payload)
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }


    render() {
        let disable = false;
        if (this.props.data) {
            if (this.props.data.data) {
                this.props.GetEmail(this.state.email);
                disable = true;
            }
        }
        return (
            <div className="box">
                <div className="heading">
                    <Typography variant="h5" gutterBottom>Enter Email</Typography>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    To set new password please enter your register email address
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={this.state.email_error ? true : (this.props.error ? true : false)}
                                    disabled={disable}
                                    variant="outlined"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    className="textField"
                                    onChange={this.handleChange}
                                    onKeyDown={this.handleKeyPress}
                                    helperText={this.state.email_error ? this.state.email_error :
                                        (this.props.error ? this.props.error.error : false)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" disabled={disable}
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
    return bindActionCreators({ request_check_email }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptEmail);