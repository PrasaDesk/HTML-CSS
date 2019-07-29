import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Box, Card, Typography } from '@material-ui/core';
import { request_get_visits } from '../../modules/actions/index';
import { bindActionCreators } from "redux";

import './visitlist.css';
import VisitAppBar from './visitappbar';
import VisitCard from "./visitcard/visitcard";
import Loading from '../UI/loading/loading';

class VisitList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                company_name: "company xyz",
                user_name: "Prasad Yeole",
                summary: "Prasad Visiting to company xyz, as a demo visit, on the date 21 july 2019",
                date_of_visit: "2019-07-21"
            },
        }
    }

    componentWillMount() {
        this.props.request_get_visits();
        this.setState({ visits: [3, 4] })
    }

    handleVisitClick = (event) => {
        console.log(this.props.data.data[event.target.id])
    }

    componentDidUpdate() {
        console.clear()
    }

    render() {

        return (
            <div className="MainUserProfile">
                <div style={{ width: "100%" }}><VisitAppBar /></div>


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
    return bindActionCreators({ request_get_visits }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitList);