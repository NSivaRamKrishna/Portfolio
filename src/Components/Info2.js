import "./Info2.css";

import React, { Component } from 'react';

class Info2 extends Component {
    render() {
        return (
            <div className="info2">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                 </div>
            </div>
        );
    }
}

export default Info2;