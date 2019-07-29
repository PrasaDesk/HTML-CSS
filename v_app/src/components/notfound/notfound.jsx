import React, { Component } from 'react'
import Not_Found from '../../resources/images/not_found.png'
import { Typography, Button } from '@material-ui/core';
import './notfound.css'

export default class NotFound extends Component {
    constructor(props) {
        super(props);
        this.backToHomepage = this.backToHomepage.bind(this);
    }

    backToHomepage = () => {
        if (localStorage.getItem("refresh_token")) {
            this.props.history.push("/dashboard")
        }
        else {
            this.props.history.push("/login")
        }
    }

    render() {
        return (
            <div className="App-header">
                <div className="notfound">
                    <img
                        src={Not_Found}
                        alt="Logo"
                        style={{ height: '90px' }}
                    />
                    <div className="notfoundtext">
                        <Typography variant="h3" gutterBottom>Not Found</Typography>
                        <Typography variant="h5" gutterBottom>The page your are looking for is doesn't exist.</Typography>
                        <Button variant="contained"
                            color="primary"
                            className="btn"
                            onClick={this.backToHomepage}
                            style={{boxShadow: "1px 2px 10px 0px black"}}>
                            Back to Homepage
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}
