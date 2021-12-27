import React, { Component } from 'react';


class Litter extends Component {

    selectLetter = () => {
        this.props.selectLetter(this.props.litter)
    }

    render() {
        return (<span onClick={this.selectLetter} className={this.props.class}>{this.props.litter}</span>)
    }
}
export default Litter