import React, { Component } from 'react'
import './loading.css'

export default class Loading extends Component {
    render() {
        return (
            <div className="App-header loadingComp">
                <div className="loader"></div>
            </div>
        )
    }
}
