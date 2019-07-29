import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import UserDetailForm from '../userdetailform/userdetailform';
import UserVisitList from '../uservisit/uservisit';
import DevelopmentIcon from '../../../resources/images/development_icon.png'
export default class UserTabBar extends Component {
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
                        <Tab id="0" label="Profile" icon={<PersonPinIcon />} />
                        <Tab id="1" label="Visits" icon={<FavoriteIcon />} />
                        <Tab id="2" label="Quotations" icon={<PhoneIcon />} />
                    </Tabs>
                </AppBar>
                {this.state.value === 0 && this.TabContainer(<UserDetailForm />)}
                {this.state.value === 1 && this.TabContainer(<UserVisitList />)}
                {this.state.value === 2 && this.TabContainer(
                    <div style={{ backgroundColor: "whitesmoke", color: "gray", textAlign: "center", margin: "5%" }}>
                        <img
                            src={DevelopmentIcon}
                            alt="Logo"
                            style={{ height: '90px' }}
                        />
                        <h2>In the Development</h2>
                    </div>)}
            </div>
        )
    }
}
