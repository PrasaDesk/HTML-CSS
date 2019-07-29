import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import DevelopmentIcon from '../../resources/images/development_icon.png';

function mapStateToProps(state) {
    return {

    };
}

class DashboardHome extends Component {
    render() {
        return (
            <div className="MainUserProfile">
                <Box style={{ padding: "2%", width: "100%" }}>
                    <div style={{ backgroundColor: "whitesmoke", color: "gray", textAlign: "center", margin: "5%" }}>
                        <img
                            src={DevelopmentIcon}
                            alt="Logo"
                            style={{ height: '90px' }}
                        />
                        <h1>Welcome to Dashboard</h1>
                        <h3>Dashboard under development</h3>
                    </div>
                </Box>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(DashboardHome);