import React, { Component } from 'react';
import Litter from './Litter'


class Litters extends Component {
    render() {
        return (
            <div>
                <span>Available letters : </span>
                <br />
                {Object.keys(this.props.letterStatus).map(l => {
                    return (
                        this.props.letterStatus[l] ?
                            <Litter key={l} litter={l} selectLetter={this.props.selectLetter} class={'selected'} /> :
                            <Litter key={l} selectLetter={this.props.selectLetter} litter={l} />
                    )
                })}
            </div>
        )
    }
}
export default Litters