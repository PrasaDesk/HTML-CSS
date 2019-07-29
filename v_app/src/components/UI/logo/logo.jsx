import React, { Component } from 'react'
import Logo_v_square from '../../../resources/images/Logo_v_square.png'

export default class Logo extends Component {
    render() {
        return (
            <div className="text-center">
                <img
                    src={Logo_v_square}
                    alt="Logo"
                    style={{ height: '90px' }}
                />
            </div>
        )
    }
}