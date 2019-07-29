import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import { request_search_visits } from '../../modules/actions/index';
import { bindActionCreators } from "redux";

import './visitlist.css'

class VisitAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            company: null,
            conuter: 3
        }
    }

    handleVisitSearch = () => {

        this.props.request_search_visits({ user_name: this.state.user, company_name: this.state.company });
    }

    handlSearchVisitChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        this.setState({ conuter: this.state.conuter - 1 })
        if (this.state.conuter === 0) {
            this.setState({ conuter: 3 })
            this.handleVisitSearch()
            return
        }
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleVisitSearch();
        }
    }

    render() {
        return (
            <div className="root" >
                <AppBar position="static" className="VisitBar">
                    <Toolbar>
                        <Typography variant="h6" className="title">
                            Visits
                            </Typography>
                        <div className="SearchBar">
                            <InputBase
                                name="user"
                                onChange={this.handlSearchVisitChange}
                                onKeyDown={this.handleKeyPress}
                                placeholder="Search with User" />
                        </div>
                        <div className="SearchBar">
                            <InputBase
                                name="company"
                                onChange={this.handlSearchVisitChange}
                                onKeyDown={this.handleKeyPress}
                                placeholder="Search with Company" />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        data: state.visitReducer
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ request_search_visits }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitAppBar);