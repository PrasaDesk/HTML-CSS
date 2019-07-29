import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import UserList from '../userlist/userlist';
import AddUser from '../adduser/adduser';

export default class UserTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }


    TabContainer = (props) => {
        return (
            <Typography component="div" style={{ padding: 8 * 3 }}>
                {props}
            </Typography>
        );
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue })
    }

    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        style={{ color: "#0b4d6e" }}
                    >
                        <Tab id="0" label="Users List" icon={<PersonPinIcon />} />
                        <Tab id="1" label="Add User" icon={<FavoriteIcon />} />
                    </Tabs>
                </AppBar>
                {this.state.value === 0 && this.TabContainer(<UserList />)}
                {this.state.value === 1 && this.TabContainer(<AddUser />)}
            </div>
        )
    }
}
