import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Box, TextField, Button, Switch } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../userprofile.css'
import { request_one_user, request_update_user } from '../../../modules/actions/index';
import { bindActionCreators } from "redux";
import ResetPassword from '../resetpassword/resetpassword';
class UserDetailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: localStorage.getItem("id"),
            first_name: "",
            last_name: "",
            address: "",
            contactNo: "",
            resetpassword: false,
        }
    }

    componentDidMount() {
        this.props.request_one_user(this.state.id);
    }

    handleEditableChnage = () => {
        this.setState({
            editable: !this.state.editable
        })
        this.setState({
            first_name: this.props.userdata.first_name,
            last_name: this.props.userdata.last_name,
            contactNo: this.props.userdata.contactNo,
            address: this.props.userdata.address
        })
    }

    handleAdminChnage = () => {
        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateClick = () => {
        let payload = this.state

        this.props.request_update_user(payload, this.state.id)
        this.setState({ editable: false })
        this.forceUpdate()
    }

    resetPswd = () => {
        this.setState({ resetpassword: !this.state.resetpassword })
    }

    componentDidUpdate() {
        console.clear()
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <span><FormControlLabel
                        control={<Switch
                            checked={this.state.editable ? true : false}
                            variant="outlined"
                            color="primary"
                            onChange={this.handleEditableChnage}
                        />}
                        labelPlacement='end'
                        label="Edit User Information"
                    /></span>
                </FormGroup>
                <Box className="userDetailForm">
                    <FormGroup>
                        <Grid container spacing={5}>
                            <Grid item sm={12} md={6}>
                                <TextField disabled={!this.state.editable} variant="filled" label="Firstname"
                                    name="first_name" className="textfieldUserDetail" value={this.state.editable ? this.state.first_name : this.props.userdata.first_name}
                                    onChange={this.handleChange}>{this.state.first_name}</TextField>
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <TextField disabled={!this.state.editable} variant="filled" label="Lastname"
                                    name="last_name" className="textfieldUserDetail" value={this.state.editable ? this.state.last_name : this.props.userdata.last_name}
                                    onChange={this.handleChange} />
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <TextField disabled={true} variant="filled" label="Email"
                                    name="email" className="textfieldUserDetail" value={this.props.userdata.email}
                                    onChange={this.handleChange} type="email"
                                    helperText="You can not edit email, because it used for login" />
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <TextField disabled={!this.state.editable} variant="filled" label="Contact Number"
                                    name="contactNo" className="textfieldUserDetail" value={this.state.editable ? this.state.contactNo : this.props.userdata.contactNo}
                                    onChange={this.handleChange} />
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <TextField disabled={!this.state.editable} variant="filled" label="Address"
                                    name="address" className="textfieldUserDetail" value={this.state.editable ? this.state.address : this.props.userdata.address}
                                    onChange={this.handleChange} multiline />
                            </Grid>
                            <Grid item sm={12} md={6}>
                                {this.state.resetpassword ? <ResetPassword Reset={this.resetPswd} />
                                    : <Button style={{ width: "80%", backgroundColor: "#F5F5F5" }} onClick={this.resetPswd}>
                                        reset password
                                    </Button>
                                }
                            </Grid>
                            <Grid item sm={12} md={6}>
                                {/* <FormControlLabel
                                    control={<Switch
                                        disabled={!this.state.editable}
                                        checked={this.props.userdata.isAdmin === "true" ? true : false}
                                        variant="outlined"
                                        color="primary"
                                        onChange={this.handleAdminChnage}
                                    />}<Button disabled={!this.state.editable} onClick={this.updateClick}
                    variant="contained" className="btn" style={{ color: "white" }}>Update Data</Button>
                                    labelPlacement="right"
                                    label="IsAdmin"
                                /> */}
                            </Grid>
                        </Grid>
                    </FormGroup>
                </Box>
                <Button disabled={!this.state.editable} onClick={this.updateClick}
                    variant="contained" className="btn" style={{ color: "white" }}>Update Data</Button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        userdata: state.userReducer
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ request_one_user, request_update_user }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailForm);