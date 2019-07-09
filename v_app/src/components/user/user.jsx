import React, { Component } from 'react';
import axios from 'axios';
import {
    Table, TableCell, TableBody,
    Paper, TableHead, TableRow, Button
} from '@material-ui/core'
import './user.css'
import { connect } from "react-redux";
import { request_login_data, request_get_users } from '../../modules/actions/index';
import { bindActionCreators } from "redux";

class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user_data: { email: "prasadyeole1997@gmail.com", password: "Prasad@123" },
            users: []
        }
        this.postLogin = this.postLogin.bind(this);
        this.getLogin = this.getLogin.bind(this);
        this.getUsers = this.getUsers.bind(this);
    }

    postLogin() {
        console.log(this.props)
        this.props.request_login_data(this.state.user_data);
    }

    getLogin() {
        console.log("login data: ", this.props.data)
    }

    getUsers() {
        this.props.request_get_users();
        if (this.props.users) {
            this.setState({ users: this.props.user })
        }
    }

    render() {
        // const { fetching, data, onRequestData, error } = this.props;
        return (
            <div className="App">
                <Button variant="contained" color="secondary" onClick={this.postLogin}>
                    login
                </Button>
                <Button variant="contained" color="primary" onClick={this.getLogin}>
                    Get Login Data
                </Button>
                <Button variant="contained" color="primary" onClick={this.getUsers}>
                    Get Users
                </Button>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="cell">ID</TableCell>
                                    <TableCell className="cell">User Email</TableCell>
                                    <TableCell className="cell">First Name</TableCell>
                                    <TableCell className="cell">Last Name</TableCell>
                                    <TableCell className="cell">Contact Number</TableCell>
                                    <TableCell className="cell">Total_visits</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.users.map(row => (
                                    <TableRow key="id">
                                        <TableCell className="cellin">{row.id}</TableCell>
                                        <TableCell className="cellin">{row.email}</TableCell>
                                        <TableCell className="cellin">{row.first_name}</TableCell>
                                        <TableCell className="cellin">{row.last_name}</TableCell>
                                        <TableCell className="cellin">{row.contactNo}</TableCell>
                                        <TableCell className="cellin">{row.total_visits}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.apiReducer,
        user: state.userReducer
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ request_login_data, request_get_users }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(User);






    // componentDidMount() {
    //     var dt = null
    //     axios.get('http://localhost:5050' + '/users')
    //         .then(res => {
    //             const users = res.data;
    //             this.setState({ user_data: users.data })
    //         }).catch((e) => {
    //             console.log("Error:  ", e.response.status)
    //         });

    // }




