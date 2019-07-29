import React, { Component } from 'react'
import Nav from '../../components/UI/nav/nav';

export default class Dashboard extends Component {

    componentDidMount() {
        if (localStorage.getItem("refresh_token") && localStorage.getItem("access_token")) {
        }
        else {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div>
                <Nav />
            </div>
        )
    }
}
