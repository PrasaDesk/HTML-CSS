import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import '../visitlist.css'

function mapStateToProps(state) {
    return {

    };
}

class VisitCard extends Component {
    render() {
        return (
            <div id={this.props.id} className="VisitCard">
                <Typography variant="h6" id={this.props.id}>
                    Company : {this.props.data.company_name}
                </Typography>

                <Typography variant="subtitle1" style={{ marginBottom: "10px" }} id={this.props.id}>
                    Visitor : {this.props.data.user_name}
                </Typography>

                {/* <Typography variant="body1" noWrap={true} id={this.props.id}>
                    {this.props.data.summary}
                </Typography> */}

                <Typography variant="body2" style={{ marginTop: "10px" }} id={this.props.id}>
                    Date: {this.props.data.date_of_visit}
                </Typography>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(VisitCard);