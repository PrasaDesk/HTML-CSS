import React, { Component } from 'react';
import { connect } from 'react-redux';
import './userprofile.css';
import { Box } from '@material-ui/core';
import UserTabBar from './user_tab_bar/user_tab_bar';


class UserProfile extends Component {
    render() {
        return (
            <div className="MainUserProfile">
                <Box
                    className="userProfilePaper"
                >
                    <UserTabBar />
                </Box>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {

    };
}

export default connect(
    mapStateToProps,
)(UserProfile);