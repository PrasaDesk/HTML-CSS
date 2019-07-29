import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Grid, TextField, Button, FormGroup, FormControlLabel,
    Switch, Box, Typography, AppBar, Toolbar
} from '@material-ui/core';
import { validateEmail, validatePassword, checkEqualPassword } from '../../utils/validations';
import { request_register_user } from '../../modules/actions/index';
import { bindActionCreators } from "redux";

export class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            retype_password: "",
            contactNo: "",
            address: "",
            isAdmin: false,
            emailErr: "",
            passwordErr: "",
        }
        this.getPayload = this.getPayload.bind(this);
    }

    handleDataChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, emailErr: "", passwordErr: "" })
    }

    getPayload() {
        return {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            contactNo: this.state.contactNo,
            address: this.state.address,
            password: this.state.password,
            isAdmin: this.state.isAdmin
        }
    }

    handleSubmmit = () => {
        if (!validateEmail(this.state.email)) {
            this.setState({ emailErr: "Please, Provide valid email" })
        }

        if (!validatePassword(this.state.password)) {
            this.setState({ passwordErr: "Password length should be more than 5" })
            return
        }

        if (!checkEqualPassword(this.state.password, this.state.retype_password)) {
            this.setState({ passwordErr: "Password Not Match" })
            return
        }
        let payload = this.getPayload();

        this.props.request_register_user(payload)
    }

    componentDidUpdate() {
        console.clear();
    }

    render() {
        return (
            <div>
                <AppBar position="static" className="VisitBar" style={{ marginBottom: "5px" }}>
                    <Toolbar>
                        <Typography variant="h6" className="title">
                            Register New User
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box className="userDetailForm ">
                    <FormGroup>
                        <Grid container spacing={5}>
                            <Grid item sm={12} md={6}>
                                <TextField required={true} name="first_name" label="Firstname" className="textfieldUserDetail"
                                    variant="filled" value={this.state.first_name} onChange={this.handleDataChange} />
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <TextField name="last_name" label="Lastname" className="textfieldUserDetail"
                                    variant="filled" value={this.state.last_name} onChange={this.handleDataChange} />
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <TextField required={true} name="email" label="Email" className="textfieldUserDetail"
                                    variant="filled" value={this.state.email} onChange={this.handleDataChange}
                                    error={this.props.userdata.data ? this.props.userdata.data.error : this.state.emailErr ? true : false}
                                    helperText={this.props.userdata.data ? this.props.userdata.data.error : this.state.emailErr} />
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <TextField name="contactNo" label="Contact Number" className="textfieldUserDetail"
                                    variant="filled" value={this.state.contactNo} onChange={this.handleDataChange} />
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <TextField variant="filled" label="Address" name="address" className="textfieldUserDetail"
                                    value={this.state.address} onChange={this.handleDataChange} multiline />
                            </Grid>
                            <Grid item sm={12} md={6}></Grid>
                            <Grid item sm={12} md={6}>
                                <TextField name="password" label="Password" className="textfieldUserDetail"
                                    variant="filled" type="password" value={this.state.password} onChange={this.handleDataChange}
                                    error={this.state.passwordErr ? true : false} helperText={this.state.passwordErr} />
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <TextField name="retype_password" label="Retype Password" className="textfieldUserDetail"
                                    variant="filled" type="password" value={this.state.retypepassword} onChange={this.handleDataChange}
                                    error={this.state.passwordErr ? true : false} helperText={this.state.passwordErr} />
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <FormControlLabel
                                    control={<Switch
                                        checked={this.state.isAdmin}
                                        variant="outlined"
                                        color="default"
                                        style={this.state.isAdmin ? { color: "#0e9ee6" } : { color: "whitesmoke" }}
                                        onChange={() => { this.setState({ isAdmin: !this.state.isAdmin }) }}
                                    />}
                                    label="IsAdmin"
                                />
                            </Grid>

                        </Grid>
                    </FormGroup>
                    <Button onClick={this.handleSubmmit}
                        variant="contained" className="btn" style={{ color: "white" }}>Submit</Button>
                </Box>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        userdata: state.loginRegisterReducer
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ request_register_user }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
