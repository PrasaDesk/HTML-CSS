import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './usermenu.css';
import { request_logout_data } from '../../../modules/actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux"
import { createBrowserHistory } from 'history';
import Fade from '@material-ui/core/Fade';

class UserMenu extends Component {

    logout = () => {
        let hist = createBrowserHistory()
        let payload = { history: hist }
        this.props.request_logout_data(payload)
    }

    handleClick = () => {

    }

    render() {
        return (
            <PopupState variant="popover" popupId="demo-popup-menu">
                {popupState => (
                    <React.Fragment>
                        <Tooltip title="User Menu" placement="left" TransitionComponent={Zoom}>
                            <AccountCircle
                                className="accountcircle"
                                style={{ fontSize: "30px" }}
                                {...bindTrigger(popupState)} />
                        </Tooltip>
                        <Menu
                            TransitionComponent={Fade}
                            {...bindMenu(popupState)}>
                            <MenuItem id="profle" onClick={popupState.close}><span onClick={this.props.ProfileRoute}>Profile</span></MenuItem>
                            <MenuItem id="setting" onClick={popupState.close}>Settings</MenuItem>
                            <MenuItem onClick={popupState.close}><span onClick={this.logout}>Logout</span></MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
        );
    }
}
const mapStateToProps = (state) => {
    if (state.logoutReducer.status === 404) {
        return {
            error: state.logoutReducer.data
        }
    }
    else {
        return {
            error: null
        }
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ request_logout_data }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
