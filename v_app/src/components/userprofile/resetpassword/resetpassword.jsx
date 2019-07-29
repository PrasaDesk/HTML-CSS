import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { validatePassword, checkEqualPassword } from '../../../utils/validations';
import { bindActionCreators } from "redux";
import { request_reset_password } from '../../../modules/actions/index';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            old_password: "",
            new_password: "",
            confirm_password: "",
            passwordErr: ""
        }
    }

    onSubmit = () => {
        if (!validatePassword(this.state.new_password)) {
            this.setState({ passwordErr: "Password length should be more than 5" })
            return
        }

        if (!checkEqualPassword(this.state.new_password, this.state.confirm_password)) {
            this.setState({ passwordErr: "Password Not Match" })
            return
        }
        let payload = {
            old_password: this.state.old_password,
            new_password: this.state.new_password,
            retype_password: this.state.confirm_password
        }

        this.props.request_reset_password(payload);
        this.props.Reset()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            passwordErr: ""
        })
    }

    render() {

        return (
            <div style={{ width: "100%" }}>
                <TextField type="Password" variant="filled" style={{ marginBottom: "5px" }} className="textfieldUserDetail"
                    label="Old Password" name="old_password" value={this.state.old_password} onChange={this.handleChange} />
                <TextField type="Password" variant="filled" style={{ marginBottom: "5px" }} className="textfieldUserDetail"
                    label="New Password" name="new_password" value={this.state.new_password} onChange={this.handleChange}
                    error={this.state.passwordErr ? true : false} helperText={this.state.passwordErr} />
                <TextField type="Password" variant="filled" style={{ marginBottom: "5px" }} className="textfieldUserDetail"
                    label="Confirm Password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleChange}
                    error={this.state.passwordErr ? true : false} helperText={this.state.passwordErr} />
                <Button className="btn" style={{ color: "white" }} onClick={this.onSubmit}>ResetPassword</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    if (state.forgetReducer.status === 200) {
        return {
            data: state.forgetReducer.data
        }
    }
    else {
        return {
            data: state.forgetReducer.data,
        }
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ request_reset_password }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);