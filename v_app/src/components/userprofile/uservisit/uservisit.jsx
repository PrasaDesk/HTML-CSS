import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Box, Card, AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import { request_search_visits } from '../../../modules/actions/index';
import { bindActionCreators } from "redux";

import VisitCard from "../../visitlist/visitcard/visitcard";
import Loading from '../../UI/loading/loading';

class UserVisitList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: localStorage.getItem("id"),
            company: null,
            conuter: 3
        }
    }

    handleVisitSearch = () => {
        this.props.request_search_visits({ user_id: this.state.user_id, company_name: this.state.company });
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

    componentWillMount() {
        this.props.request_search_visits({ user_id: this.state.user_id });
        this.setState({ visits: [3, 4] })
    }

    handleVisitClick = (event) => {
        console.log(this.props.data.data[event.target.id])
    }

    componentDidUpdate() {
        console.clear();
    }

    render() {

        return (
            <div className="MainUserProfile">
                <div style={{ width: "100%" }}>
                    <AppBar position="static" className="VisitBar">
                        <Toolbar>
                            <Typography variant="h6" className="title">
                                Visits
                            </Typography>
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

                <Box style={{ padding: "2%", width: "100%" }}>
                    <Grid container spacing={3}>
                        {this.props.error
                            ? <div style={{ textAlign: "center", color: "gray", width: "100%" }}>
                                <Typography variant="h5">
                                    Visit Not Found for current search
                                </Typography></div>
                            :
                            this.props.data.data ?
                                this.props.data.data.map((item, index) => (
                                    <Grid key={index} item sm={12} md={6}>

                                        <Card id={index} className="RootCard" onClick={this.handleVisitClick}>
                                            <VisitCard id={index} data={item.visit}></VisitCard>
                                        </Card>

                                    </Grid>
                                )) : <Loading />}
                    </Grid>
                </Box>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    if (state.visitReducer.status === 404 || state.visitReducer.status === 500) {
        return {
            error: state.visitReducer
        }
    }
    else {
        return {
            data: state.visitReducer
        }
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ request_search_visits }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserVisitList);