import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Table, TableCell, TableRow, TableHead, Paper, Box, TableBody, Checkbox,
    AppBar, InputBase, Typography, Toolbar
} from '@material-ui/core';
import { request_get_users, request_search_user } from '../../modules/actions/index';
import { bindActionCreators } from "redux";
import './userlist.css';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            counter: 3
        }
    }


    handleUserSearch = () => {

        let payload = {
            first_name: this.state.first_name,
            last_name: this.state.last_name
        }
        this.props.request_search_user(payload)
    }

    handleSearchUserChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        this.setState({ counter: this.state.counter - 1 })
        if (this.state.counter === 0) {
            this.setState({ counter: 3 })
            this.handleUserSearch()
            return
        }
    }
    componentDidMount() {
        this.props.request_get_users();
    }

    handleClick = (event) => {
        console.log("get click: ", (this.props.userdata.data)[event.target.id])
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleUserSearch();
        }
    }

    componentDidUpdate() {
        console.clear();
    }

    render() {
        return (
            <Box className="MainUserProfile">
                <div style={{ width: "100%", marginBottom: "15px" }}>
                    <AppBar position="static" className="VisitBar">
                        <Toolbar>
                            <Typography variant="h6" className="title">
                                Users
                            </Typography>
                            <div className="SearchBar">
                                <InputBase
                                    name="first_name"
                                    onChange={this.handleSearchUserChange}
                                    onKeyDown={this.handleKeyPress}
                                    placeholder="Search first_name" />
                            </div>
                            <div className="SearchBar">
                                <InputBase
                                    name="last_name"
                                    onChange={this.handleSearchUserChange}
                                    onKeyDown={this.handleKeyPress}
                                    placeholder="Search last_name" />
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
                <Paper className="userProfilePaper">
                    <Table>
                        <TableHead className="TableHead">
                            <TableRow>
                                <TableCell align="left">Firstname</TableCell>
                                <TableCell align="left">Lastname</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Contact No</TableCell>
                                <TableCell align="left">isAdmin</TableCell>
                            </TableRow>
                        </TableHead>

                        {this.props.error
                            ? <div style={{ textAlign: "center", color: "gray", width: "100%" }}>
                                <Typography variant="h5">
                                    {this.props.error.data}
                                </Typography></div>
                            : <TableBody>
                                {this.props.userdata.data ? (this.props.userdata.data).map((user, index) => (
                                    <TableRow id={index} key={index} className="TableRowCont" onClick={this.handleClick}>
                                        <TableCell id={index} align="left">{user.first_name}</TableCell>
                                        <TableCell id={index} align="left">{user.last_name}</TableCell>
                                        <TableCell id={index} align="left">{user.email}</TableCell>
                                        <TableCell id={index} align="left">{user.contactNo}</TableCell>
                                        <TableCell id={index} align="left">
                                            <Checkbox
                                                disabled={true}
                                                checked={user.isAdmin}
                                                style={user.isAdmin ? { color: "#439F46" } : { color: "black" }}
                                            />
                                        </TableCell>
                                    </TableRow>))
                                    : null}
                            </TableBody>
                        }
                    </Table>
                </Paper>
            </Box>
        );
    }
}
const mapStateToProps = (state) => {

    if (typeof (state.userReducer.data) === "string") {
        return {
            error: state.userReducer
        }
    }
    else {
        return {
            userdata: state.userReducer
        }
    }


}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ request_get_users, request_search_user }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
