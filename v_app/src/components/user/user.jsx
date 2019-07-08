import React, { Component } from 'react';
import axios from 'axios';
import { Table, TableCell, TableBody, Paper, TableHead, TableRow } from '@material-ui/core'
import './user.css'
import { connect } from "react-redux";
import logo from "../../logo.svg";

export class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user_data: []
        }
    }
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

    render() {
        const { fetching, data, onRequestData, error } = this.props;
        return (
            <div className="App">
                <header>
                    <img src={data || logo} className="App-logo" alt="logo" />
                </header>

                {data ? (
                    <p className="App-intro">Keep clicking for new data</p>
                ) : (
                        <p className="App-intro">Replace the React icon with a data!</p>
                    )}

                {fetching ? (
                    <button disabled>Fetching...</button>
                ) : (
                        <button onClick={onRequestData}>Request a Data</button>
                    )}

                {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        data: state.data,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestData: () => dispatch({ type: "REQUEST_API_DATA" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);






// <Paper>
// <Table>
//     <TableHead>
//         <TableRow>
//             <TableCell className="cell">ID</TableCell>
//             <TableCell className="cell">User Email</TableCell>
//             <TableCell className="cell">First Name</TableCell>
//             <TableCell className="cell">Last Name</TableCell>
//             <TableCell className="cell">Contact Number</TableCell>
//             <TableCell className="cell">Total_visits</TableCell>
//         </TableRow>
//     </TableHead>
//     <TableBody>
//         {this.state.user_data.map(row => (
//             <TableRow key="id">
//                 <TableCell className="cellin">{row.id}</TableCell>
//                 <TableCell className="cellin">{row.email}</TableCell>
//                 <TableCell className="cellin">{row.first_name}</TableCell>
//                 <TableCell className="cellin">{row.last_name}</TableCell>
//                 <TableCell className="cellin">{row.contactNo}</TableCell>
//                 <TableCell className="cellin">{row.total_visits}</TableCell>
//             </TableRow>
//         ))}
//     </TableBody>
// </Table>
// </Paper>