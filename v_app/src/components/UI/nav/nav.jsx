import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import UserProfile from '../../userprofile/userprofile';
import UserTab from '../../user/usertab';
import VisitList from '../../visitlist/visitlist';
import UserMenu from '../usermenu/usermenu';
import DashboardHome from '../../dashboardhome/dashboardhome';
import { Route, Switch, BrowserRouter, Router } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import ViewAgenda from '@material-ui/icons/ViewAgenda';
import MailIcon from '@material-ui/icons/Mail';
import './nav.css'

import { createBrowserHistory } from 'history';

let his = createBrowserHistory()

class Nav extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="root" >
                <CssBaseline />

                {/* <Toolbar /> */}
                <Drawer
                    className="drawer"
                    variant="permanent"

                >
                    <AppBar position="fixed" className="appBar" style={{ backgroundColor: "#0e9ee6" }}>
                        <Toolbar>
                            <Typography variant="h6" noWrap style={{ flex: "1" }}>
                                V Square Visitor App
                            </Typography>
                            <UserMenu ProfileRoute={() => { his.push("/dashboard/profile") }} />
                        </Toolbar>
                    </AppBar>

                    <Toolbar />
                    <List className="drawerPaper">
                        <ListItem button key="Users" onClick={() => { his.push("/dashboard/users") }}>
                            <ListItemIcon> <SupervisedUserCircle /> </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>
                        <ListItem button key="Visits" onClick={() => { his.push("/dashboard/visits") }}>
                            <ListItemIcon> <ViewAgenda /> </ListItemIcon>
                            <ListItemText primary="Visits" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List className="drawerPaper">

                        <ListItem button key="Email_Templates">
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Templates" />
                        </ListItem>

                    </List>
                </Drawer>

                <main className="content" style={{ padding: "10px" }}>
                    <Toolbar />
                    {/* <UserTab /> */}
                    {/* <VisitList /> */}
                    {/* <UserProfile /> */}
                    <Router history={his}>
                        <Switch>
                            <Route exact path="/dashboard" component={DashboardHome} />
                            <Route exact path="/dashboard/users" component={UserTab} />
                            <Route exact path="/dashboard/visits" component={VisitList} />
                            <Route exact path="/dashboard/profile" component={UserProfile} />
                        </Switch>
                    </Router>
                </main>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        error: state.loginRegisterReducer.data
    }

}

export default connect(mapStateToProps)(Nav);